import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
console.log('GEMINI_API_KEY:', API_KEY);
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

const MAX_CONVERSATION_PAIRS = 7;

interface ContentPart {
  text: string;
}

interface Content {
  role: 'user' | 'model';
  parts: ContentPart[];
}

interface GeminiApiRequestBody {
  contents: Content[];
  generationConfig: {
    temperature: number;
    maxOutputTokens: number;
  };
  safetySettings: {
    category: string;
    threshold: string;
  }[];
}

interface GeminiApiResponse {
  candidates: {
    content: {
      parts: { text: string }[];
    };
  }[];
}

class GeminiApiClient {
  private apiEndpoint: string;
  private chatHistory: Content[] = [];
  private initialInstructionGiven = false;

  constructor(endpoint: string = GEMINI_API_ENDPOINT) {
    this.apiEndpoint = endpoint;
  }

  /**
   * Thiết lập hướng dẫn ban đầu để cố định vai trò chuyên gia triết học.
   */
  private ensureInitialInstruction() {
    if (!this.initialInstructionGiven) {
      this.chatHistory = [
        {
          role: 'user',
          parts: [
            {
              text: `
Bạn là một chuyên gia triết học với kiến thức chuyên sâu, am hiểu cả triết học phương Đông lẫn phương Tây, từ cổ đại đến hiện đại.

Quy tắc phản hồi của bạn:
1. Trả lời sâu sắc, có dẫn giải rõ ràng về mọi vấn đề triết học (đặc biệt lý luận kinh tế chính trị của C. Mác nếu được hỏi).
2. Sử dụng ngôn ngữ dễ hiểu để truyền tải các khái niệm phức tạp.
3. Luôn duy trì phong thái học thuật, khách quan và chuyên nghiệp trong từng câu trả lời.
            `.trim(),
            },
          ],
        },
        {
          role: 'model',
          parts: [
            {
              text: 'Vâng, tôi đã sẵn sàng hỗ trợ bạn với các vấn đề triết học một cách nghiêm túc và chuyên sâu.',
            },
          ],
        },
      ];
      this.initialInstructionGiven = true;
    }
  }

  /**
   * Giữ lịch sử hội thoại ở mức phù hợp để tránh vượt quá token limit.
   */
  private trimChatHistory() {
    if (this.chatHistory.length > 2 + MAX_CONVERSATION_PAIRS * 2) {
      const startIndex = this.chatHistory.length - (MAX_CONVERSATION_PAIRS * 2);
      this.chatHistory = [
        this.chatHistory[0],
        this.chatHistory[1],
        ...this.chatHistory.slice(startIndex),
      ];
    }
  }

  /**
   * Gửi yêu cầu sinh nội dung từ mô hình Gemini.
   */
  async generateContent(prompt: string): Promise<string> {
    this.ensureInitialInstruction();
    this.chatHistory.push({ role: 'user', parts: [{ text: prompt }] });
    this.trimChatHistory();

    const requestBody: GeminiApiRequestBody = {
      contents: this.chatHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      ],
    };

    try {
      const response = await axios.post<GeminiApiResponse>(this.apiEndpoint, requestBody, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 45000,
      });

      const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!botResponse) {
        throw new Error('Phản hồi từ Gemini API không đúng định dạng.');
      }

      this.chatHistory.push({ role: 'model', parts: [{ text: botResponse }] });
      return botResponse;

    } catch (error: any) {
      if (this.chatHistory.length > 0 && this.chatHistory[this.chatHistory.length - 1].role === 'user') {
        this.chatHistory.pop();
      }

      console.error('Lỗi khi gọi Gemini API:', error.response?.data || error.message);
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        const errorMessage = data?.error?.message || 'Lỗi không xác định từ máy chủ.';
        if (status === 429) throw new Error(`Hệ thống đang quá tải, vui lòng thử lại sau. (${errorMessage})`);
        throw new Error(`Lỗi từ API: ${status} - ${errorMessage}`);
      }
      throw error;
    }
  }

  resetChatHistory() {
    this.chatHistory = [];
    this.initialInstructionGiven = false;
  }
}

export const geminiApiClient = new GeminiApiClient();
