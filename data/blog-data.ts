import type { SectionId } from './philosophy-chapters'

// Multilingual blog data with philosophy content
export const blogData = {
    1: {
        id: 1,
        section: '2.1.1' as SectionId,
        title: {
            vietnamese: 'Sản xuất hàng hóa (theo C. Mác)',
            english: 'Commodity Production (according to K. Marx)',
            japanese: '商品生産（K.マルクスによる）',
        },
        content: {
            vietnamese: `
# Sản xuất hàng hóa (theo C. Mác)

## Khái niệm

Sản xuất hàng hóa là hình thức tổ chức kinh tế mà trong đó, con người làm ra sản phẩm để trao đổi hoặc mua bán, chứ không phải để dùng trực tiếp.

## Hai điều kiện ra đời của sản xuất hàng hóa

### 1. Phân công lao động xã hội
Xã hội phân chia lao động thành các ngành nghề chuyên biệt. Mỗi người chỉ làm ra một số loại sản phẩm nhất định, nên để đáp ứng nhu cầu của mình, họ phải trao đổi sản phẩm với người khác.

### 2. Sự tách biệt về kinh tế giữa các chủ thể sản xuất
Mỗi người sản xuất là một đơn vị độc lập, có lợi ích riêng. Họ không thể tự cung tự cấp mà phải trao đổi thông qua mua bán. Điều này chỉ xuất hiện khi có sự khác biệt về quyền sở hữu và lợi ích giữa các chủ thể.

## Kết luận

Khi hai điều kiện trên cùng tồn tại, sản xuất hàng hóa sẽ tự nhiên hình thành và phát triển. Con người không thể dùng ý chí để xóa bỏ nó. Sản xuất hàng hóa vì thế có ưu thế vượt trội so với sản xuất tự cấp, tự túc và là nền tảng thúc đẩy xã hội phát triển.
      `,
            english: `
# Commodity Production (according to K. Marx)

## Concept

Commodity production is an economic organizational form in which people produce products for exchange or sale, rather than for direct use.

## Two Conditions for the Emergence of Commodity Production

### 1. Social Division of Labor
Society divides labor into specialized industries and professions. Each person only produces certain types of products, so to meet their needs, they must exchange products with others.

### 2. Economic Separation Between Production Subjects
Each producer is an independent unit with their own interests. They cannot be self-sufficient and must exchange through buying and selling. This only appears when there are differences in ownership rights and interests between subjects.

## Conclusion

When these two conditions coexist, commodity production will naturally form and develop. Humans cannot use will to eliminate it. Commodity production therefore has superior advantages over self-sufficient production and is the foundation driving social development.
      `,
            japanese: `
# 商品生産（K.マルクスによる）

## 概念

商品生産とは、人々が直接使用するためではなく、交換や売買のために製品を作る経済組織形態です。

## 商品生産の発生の二つの条件

### 1. 社会的分業
社会は労働を専門的な産業や職業に分割します。各人は特定の種類の製品のみを生産するため、自分のニーズを満たすために他の人と製品を交換しなければなりません。

### 2. 生産主体間の経済的分離
各生産者は独立した単位であり、独自の利益を持っています。彼らは自給自足できず、売買を通じて交換しなければなりません。これは主体間で所有権と利益に違いがある場合にのみ現れます。

## 結論

これら二つの条件が共存するとき、商品生産は自然に形成され発展します。人間は意志によってそれを排除することはできません。したがって、商品生産は自給自足生産よりも優れた利点を持ち、社会発展を推進する基盤となります。
      `,
        },
        excerpt: {
            vietnamese:
                'Tìm hiểu về khái niệm sản xuất hàng hóa và hai điều kiện cơ bản để hình thành sản xuất hàng hóa theo quan điểm của C. Mác...',
            english:
                "Learn about the concept of commodity production and the two basic conditions for forming commodity production according to K. Marx's perspective...",
            japanese:
                'K.マルクスの観点による商品生産の概念と商品生産形成の二つの基本条件について学ぶ...',
        },
        author: 'Admin',
        date: '2024-01-15',
        readTime: {
            vietnamese: '8 phút',
            english: '8 minutes',
            japanese: '8分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question: 'Sản xuất hàng hóa là gì?',
                    options: [
                        'Sản xuất để dùng trực tiếp',
                        'Sản xuất để trao đổi hoặc mua bán',
                        'Sản xuất để tích trữ',
                        'Sản xuất để xuất khẩu',
                    ],
                    correct: 1,
                },
                {
                    question:
                        'Điều kiện nào KHÔNG phải là điều kiện ra đời của sản xuất hàng hóa?',
                    options: [
                        'Phân công lao động xã hội',
                        'Sự tách biệt về kinh tế giữa các chủ thể',
                        'Có tiền tệ lưu thông',
                        'Có quyền sở hữu riêng',
                    ],
                    correct: 2,
                },
            ],
            english: [
                {
                    question: 'What is commodity production?',
                    options: [
                        'Production for direct use',
                        'Production for exchange or sale',
                        'Production for storage',
                        'Production for export',
                    ],
                    correct: 1,
                },
                {
                    question:
                        'Which is NOT a condition for the emergence of commodity production?',
                    options: [
                        'Social division of labor',
                        'Economic separation between subjects',
                        'Existence of currency circulation',
                        'Private ownership rights',
                    ],
                    correct: 2,
                },
            ],
            japanese: [
                {
                    question: '商品生産とは何ですか？',
                    options: [
                        '直接使用のための生産',
                        '交換や売買のための生産',
                        '貯蔵のための生産',
                        '輸出のための生産',
                    ],
                    correct: 1,
                },
                {
                    question: '商品生産の発生条件でないものはどれですか？',
                    options: [
                        '社会的分業',
                        '主体間の経済的分離',
                        '通貨流通の存在',
                        '私有財産権',
                    ],
                    correct: 2,
                },
            ],
        },
    },
    2: {
        id: 2,
        section: '2.1.2' as SectionId,
        title: {
            vietnamese: 'Hàng hóa và hai thuộc tính cơ bản',
            english: 'Commodities and Two Basic Attributes',
            japanese: '商品と二つの基本属性',
        },
        content: {
            vietnamese: `
# Hàng hóa (theo C. Mác)

## 1. Khái niệm hàng hóa

Hàng hóa là sản phẩm của lao động có thể thoả mãn nhu cầu của con người thông qua trao đổi, mua bán.

→ Hàng hóa chỉ thực sự là hàng hóa khi được đưa ra thị trường để trao đổi, có thể ở dạng vật chất (như quần áo, thực phẩm) hoặc phi vật chất (dịch vụ, bản quyền...).

## 2. Hai thuộc tính cơ bản của hàng hóa

### Giá trị sử dụng
- Là công dụng của sản phẩm với con người (có thể là nhu cầu vật chất, tinh thần; tiêu dùng cá nhân hoặc cho sản xuất).
- Chỉ thực hiện khi hàng hóa được sử dụng hoặc tiêu dùng.
- Trong thị trường, giá trị sử dụng phải phù hợp với nhu cầu của người mua.
- → Người sản xuất cần liên tục cải tiến sản phẩm để đáp ứng nhu cầu ngày càng cao.

### Giá trị
- Là lao động xã hội của người sản xuất kết tinh trong hàng hóa.
- Giá trị không nằm ở công dụng, mà nằm ở chỗ: hàng hóa được tạo ra bởi một lượng lao động nhất định, và lượng lao động đó có thể so sánh, đo lường được.
- → Ví dụ: Nếu 1 cái áo mất 2 giờ làm ra và 1 đôi giày cũng mất 2 giờ, thì chúng có thể trao đổi với nhau theo tỉ lệ ngang bằng.

## Kết luận

Giá trị hàng hóa thể hiện mối quan hệ kinh tế giữa những người sản xuất và trao đổi hàng hóa, và là một phạm trù lịch sử (chỉ tồn tại khi có sản xuất hàng hóa).

Muốn hàng hóa được thị trường chấp nhận, người sản xuất vừa phải đảm bảo giá trị sử dụng (đúng nhu cầu), vừa cần tính đến giá trị (lao động bỏ ra) để đạt hiệu quả kinh tế.
      `,
            english: `
# Commodities (according to K. Marx)

## 1. Concept of Commodities

A commodity is a product of labor that can satisfy human needs through exchange and trade.

→ A commodity is truly a commodity only when it is brought to market for exchange, whether in material form (like clothing, food) or immaterial form (services, copyrights...).

## 2. Two Basic Attributes of Commodities

### Use Value
- The utility of a product to humans (can be material or spiritual needs; individual consumption or for production).
- Only realized when the commodity is used or consumed.
- In the market, use value must match the buyer's needs.
- → Producers need to continuously improve products to meet increasingly high demands.

### Value
- The social labor of producers crystallized in the commodity.
- Value lies not in utility, but in the fact that commodities are created by a certain amount of labor, and that amount of labor can be compared and measured.
- → Example: If 1 shirt takes 2 hours to make and 1 pair of shoes also takes 2 hours, they can be exchanged at an equal ratio.

## Conclusion

Commodity value reflects the economic relationship between those who produce and exchange commodities, and is a historical category (only exists when there is commodity production).

For commodities to be accepted by the market, producers must ensure both use value (meeting needs) and consider value (labor invested) to achieve economic efficiency.
      `,
            japanese: `
# 商品（K.マルクスによる）

## 1. 商品の概念

商品とは、交換や売買を通じて人間のニーズを満たすことができる労働の産物です。

→ 商品は市場に持ち込まれて交換される時に真に商品となり、物質的形態（衣服、食品など）または非物質的形態（サービス、著作権など）があります。

## 2. 商品の二つの基本属性

### 使用価値
- 人間に対する製品の効用（物質的または精神的ニーズ、個人消費または生産用）。
- 商品が使用または消費される時にのみ実現される。
- 市場では、使用価値は買い手のニーズに合致しなければならない。
- → 生産者は高まるニーズに応えるため継続的に製品を改善する必要がある。

### 価値
- 商品に結晶化した生産者の社会的労働。
- 価値は効用にあるのではなく、商品が一定量の労働によって作られ、その労働量が比較・測定可能であることにある。
- → 例：1枚のシャツを作るのに2時間、1足の靴を作るのにも2時間かかる場合、等しい比率で交換できる。

## 結論

商品価値は商品を生産・交換する人々の経済関係を反映し、歴史的範疇である（商品生産がある時にのみ存在）。

商品が市場に受け入れられるには、生産者は使用価値（ニーズに合致）を確保し、価値（投入労働）を考慮して経済効率を達成しなければならない。
      `,
        },
        excerpt: {
            vietnamese:
                'Khám phá khái niệm hàng hóa và hai thuộc tính cơ bản: giá trị sử dụng và giá trị theo quan điểm của C. Mác...',
            english:
                "Explore the concept of commodities and two basic attributes: use value and value according to K. Marx's perspective...",
            japanese:
                'K.マルクスの観点による商品の概念と二つの基本属性：使用価値と価値を探る...',
        },
        author: 'Admin',
        date: '2024-01-12',
        readTime: {
            vietnamese: '10 phút',
            english: '10 minutes',
            japanese: '10分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question: 'Giá trị sử dụng của hàng hóa là gì?',
                    options: [
                        'Lao động kết tinh trong hàng hóa',
                        'Công dụng của sản phẩm với con người',
                        'Giá cả của hàng hóa trên thị trường',
                        'Thời gian sản xuất hàng hóa',
                    ],
                    correct: 1,
                },
                {
                    question:
                        'Theo ví dụ trong bài, nếu 1 áo mất 2 giờ và 1 đôi giày mất 2 giờ thì:',
                    options: [
                        'Áo có giá trị cao hơn giày',
                        'Giày có giá trị cao hơn áo',
                        'Chúng có thể trao đổi ngang bằng',
                        'Không thể so sánh được',
                    ],
                    correct: 2,
                },
            ],
            english: [
                {
                    question: 'What is the use value of a commodity?',
                    options: [
                        'Labor crystallized in the commodity',
                        'The utility of the product to humans',
                        'The price of the commodity in the market',
                        'The production time of the commodity',
                    ],
                    correct: 1,
                },
                {
                    question:
                        'According to the example, if 1 shirt takes 2 hours and 1 pair of shoes takes 2 hours:',
                    options: [
                        'The shirt has higher value than shoes',
                        'The shoes have higher value than shirt',
                        'They can be exchanged equally',
                        'They cannot be compared',
                    ],
                    correct: 2,
                },
            ],
            japanese: [
                {
                    question: '商品の使用価値とは何ですか？',
                    options: [
                        '商品に結晶化した労働',
                        '人間に対する製品の効用',
                        '市場での商品の価格',
                        '商品の生産時間',
                    ],
                    correct: 1,
                },
                {
                    question:
                        '例によると、シャツ1枚が2時間、靴1足が2時間かかる場合：',
                    options: [
                        'シャツの方が靴より価値が高い',
                        '靴の方がシャツより価値が高い',
                        '等しく交換できる',
                        '比較できない',
                    ],
                    correct: 2,
                },
            ],
        },
    },
    3: {
        id: 3,
        section: '2.1.3' as SectionId,
        title: {
            vietnamese: 'Tiền tệ - Nguồn gốc và bản chất',
            english: 'Money - Origin and Nature',
            japanese: '貨幣 - 起源と本質',
        },
        content: {
            vietnamese: `
# Tiền tệ

## 2.1.3.1. Nguồn gốc và bản chất của tiền

Tiền là kết quả của sự phát triển sản xuất và trao đổi hàng hóa. Giá trị hàng hóa vốn trừu tượng, không nhìn thấy được, chỉ bộc lộ ra thông qua quá trình trao đổi.

## Các hình thái giá trị (tiền đề ra đời của tiền)

### 1. Hình thái giá trị giản đơn (ngẫu nhiên)
- Trao đổi trực tiếp giữa hai hàng hóa (ví dụ: 1A = 2B)
- Hình thái vật ngang giá là hàng hóa B – tạm thời đại diện cho giá trị của A.

### 2. Hình thái giá trị mở rộng (đầy đủ)
- Hàng hóa A được so sánh với nhiều hàng hóa khác (A = 2B = 3C = 5D...)
- Tuy nhiên, vẫn là trao đổi trực tiếp, chưa có vật ngang giá thống nhất.

### 3. Hình thái giá trị chung
- Một hàng hóa (ví dụ A) trở thành vật ngang giá chung cho nhiều hàng hóa khác (2B = 3C = 5D = 1A).
- Nhưng ở các vùng khác nhau, vật ngang giá chung có thể khác nhau → gây bất tiện.

### 4. Hình thái tiền
- Một hàng hóa đặc biệt (ví dụ vàng) trở thành vật ngang giá chung thống nhất cho tất cả hàng hóa.
- Ví dụ: 2B = 3C = 5D = 0.1gr vàng

## Bản chất của tiền

→ Tiền là một hàng hóa đặc biệt, ra đời từ quá trình phát triển của trao đổi – sản xuất – phân công lao động xã hội.

→ Tiền thể hiện giá trị của hàng hóa, phản ánh lao động xã hội và quan hệ giữa người sản xuất, trao đổi.

## Quan niệm về tiền trong kinh tế vi mô

Theo kinh tế học vi mô: Tiền là bất kỳ phương tiện nào được xã hội chấp nhận để thanh toán hàng hóa hay nợ nần.

Không quan trọng bản chất vật lý (vỏ sò, răng thú, vàng…), mà quan trọng là quy ước xã hội công nhận nó như là tiền.

⇒ Tiền là phương tiện trao đổi có tính quy ước xã hội.
      `,
            english: `
# Money

## 2.1.3.1. Origin and Nature of Money

Money is the result of the development of production and commodity exchange. Commodity value is inherently abstract and invisible, only revealed through the exchange process.

## Forms of Value (Prerequisites for the Emergence of Money)

### 1. Simple (Accidental) Form of Value
- Direct exchange between two commodities (example: 1A = 2B)
- The equivalent form is commodity B – temporarily representing the value of A.

### 2. Expanded (Total) Form of Value
- Commodity A is compared with many other commodities (A = 2B = 3C = 5D...)
- However, it's still direct exchange, without a unified equivalent.

### 3. General Form of Value
- One commodity (example A) becomes the general equivalent for many other commodities (2B = 3C = 5D = 1A).
- But in different regions, the general equivalent may differ → causing inconvenience.

### 4. Money Form
- A special commodity (example gold) becomes the unified general equivalent for all commodities.
- Example: 2B = 3C = 5D = 0.1g gold

## Nature of Money

→ Money is a special commodity, emerging from the development process of exchange – production – social division of labor.

→ Money expresses the value of commodities, reflecting social labor and relationships between producers and exchangers.

## Concept of Money in Microeconomics

According to microeconomics: Money is any medium accepted by society to pay for goods or debts.

The physical nature (shells, animal teeth, gold...) is not important, but rather the social convention recognizing it as money.

⇒ Money is an exchange medium with social conventional nature.
      `,
            japanese: `
# 貨幣

## 2.1.3.1. 貨幣の起源と本質

貨幣は生産と商品交換の発展の結果です。商品価値は本来抽象的で目に見えず、交換過程を通じてのみ現れます。

## 価値形態（貨幣発生の前提）

### 1. 単純（偶然的）価値形態
- 二つの商品間の直接交換（例：1A = 2B）
- 等価形態は商品B - 一時的にAの価値を代表。

### 2. 拡大（全体的）価値形態
- 商品Aが多くの他の商品と比較される（A = 2B = 3C = 5D...）
- しかし、まだ直接交換で、統一された等価物はない。

### 3. 一般的価値形態
- 一つの商品（例A）が多くの他の商品の一般等価物となる（2B = 3C = 5D = 1A）。
- しかし異なる地域では一般等価物が異なる可能性がある → 不便を引き起こす。

### 4. 貨幣形態
- 特別な商品（例：金）がすべての商品の統一された一般等価物となる。
- 例：2B = 3C = 5D = 0.1g金

## 貨幣の本質

→ 貨幣は特別な商品であり、交換 - 生産 - 社会的分業の発展過程から生まれる。

→ 貨幣は商品の価値を表現し、社会的労働と生産者・交換者間の関係を反映する。

## ミクロ経済学における貨幣の概念

ミクロ経済学によると：貨幣は社会が商品や債務の支払いに受け入れる任意の媒体です。

物理的性質（貝殻、動物の歯、金...）は重要ではなく、社会がそれを貨幣として認める慣習が重要です。

⇒ 貨幣は社会的慣習性を持つ交換媒体です。
      `,
        },
        excerpt: {
            vietnamese:
                'Tìm hiểu về nguồn gốc, bản chất của tiền tệ và quá trình phát triển từ các hình thái giá trị đến hình thái tiền...',
            english:
                'Learn about the origin and nature of money and the development process from value forms to money form...',
            japanese:
                '貨幣の起源と本質、価値形態から貨幣形態への発展過程について学ぶ...',
        },
        author: 'Admin',
        date: '2024-01-10',
        readTime: {
            vietnamese: '12 phút',
            english: '12 minutes',
            japanese: '12分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question: 'Hình thái giá trị nào xuất hiện đầu tiên?',
                    options: [
                        'Hình thái tiền',
                        'Hình thái giá trị chung',
                        'Hình thái giá trị giản đơn',
                        'Hình thái giá trị mở rộng',
                    ],
                    correct: 2,
                },
                {
                    question:
                        'Theo quan niệm kinh tế vi mô, điều gì quan trọng nhất đối với tiền?',
                    options: [
                        'Bản chất vật lý',
                        'Giá trị vàng',
                        'Quy ước xã hội công nhận',
                        'Kích thước và hình dạng',
                    ],
                    correct: 2,
                },
            ],
            english: [
                {
                    question: 'Which value form appeared first?',
                    options: [
                        'Money form',
                        'General form of value',
                        'Simple form of value',
                        'Expanded form of value',
                    ],
                    correct: 2,
                },
                {
                    question:
                        'According to microeconomic concept, what is most important for money?',
                    options: [
                        'Physical nature',
                        'Gold value',
                        'Social conventional recognition',
                        'Size and shape',
                    ],
                    correct: 2,
                },
            ],
            japanese: [
                {
                    question: '最初に現れた価値形態はどれですか？',
                    options: [
                        '貨幣形態',
                        '一般的価値形態',
                        '単純価値形態',
                        '拡大価値形態',
                    ],
                    correct: 2,
                },
                {
                    question:
                        'ミクロ経済学の概念によると、貨幣にとって最も重要なことは何ですか？',
                    options: [
                        '物理的性質',
                        '金の価値',
                        '社会的慣習的認識',
                        'サイズと形状',
                    ],
                    correct: 2,
                },
            ],
        },
    },
    4: {
        id: 4,
        section: '2.2.1' as SectionId,
        title: {
            vietnamese: 'Thị trường - Khái niệm và vai trò',
            english: 'Market - Concept and Role',
            japanese: '市場 - 概念と役割',
        },
        content: {
            vietnamese: `
# Thị trường và nền kinh tế thị trường

## 2.2.1.1. Khái niệm thị trường

Thị trường là tập hợp các quan hệ kinh tế về mua – bán, trao đổi hàng hóa, dịch vụ với giá cả và số lượng xác định.

### Thị trường tồn tại ở hai cấp độ:
- **Cụ thể**: chợ, cửa hàng, siêu thị...
- **Trừu tượng**: hệ thống quan hệ cung – cầu, giá cả, hàng – tiền...

## Phân loại thị trường

### Theo đối tượng:
- Thị trường hàng hóa
- Thị trường dịch vụ

### Theo phạm vi:
- Thị trường trong nước
- Thị trường quốc tế

### Theo yếu tố trao đổi:
- Tư liệu tiêu dùng
- Tư liệu sản xuất

### Theo cơ chế vận hành:
- Thị trường tự do
- Thị trường có điều tiết
- Cạnh tranh hoàn hảo/không hoàn hảo

## 2.2.1.2. Vai trò của thị trường

### 1. Thực hiện giá trị hàng hóa, thúc đẩy sản xuất
- Thị trường giúp tiêu thụ hàng hóa ⇒ mở rộng thị trường ⇒ kích thích sản xuất.

### 2. Kích thích sáng tạo, phân bổ nguồn lực hiệu quả
- Ai sáng tạo, đáp ứng tốt nhu cầu thì sẽ có lợi ích ⇒ động lực cải tiến liên tục.
- Thị trường tự điều tiết phân bổ tài nguyên về nơi sử dụng hiệu quả.

### 3. Gắn kết nền kinh tế trong nước và với thế giới
- Gắn các vùng miền, ngành nghề → một hệ thống kinh tế thống nhất.
- Thị trường quốc tế giúp kinh tế trong nước mở rộng, hội nhập.

## Kết luận

Thị trường đóng vai trò quan trọng trong việc điều tiết nền kinh tế, thúc đẩy sản xuất và phân bổ nguồn lực một cách hiệu quả, đồng thời tạo động lực cho sự phát triển và đổi mới.
      `,
            english: `
# Market and Market Economy

## 2.2.1.1. Concept of Market

Market is a collection of economic relationships regarding buying-selling, exchanging goods and services with determined prices and quantities.

### Market exists at two levels:
- **Concrete**: markets, stores, supermarkets...
- **Abstract**: system of supply-demand relationships, prices, goods-money...

## Market Classification

### By object:
- Goods market
- Services market

### By scope:
- Domestic market
- International market

### By exchange factors:
- Consumer goods
- Production materials

### By operating mechanism:
- Free market
- Regulated market
- Perfect/imperfect competition

## 2.2.1.2. Role of Market

### 1. Realizing commodity value, promoting production
- Market helps consume goods ⇒ expand market ⇒ stimulate production.

### 2. Stimulating innovation, efficient resource allocation
- Those who innovate and meet needs well will benefit ⇒ continuous improvement motivation.
- Market self-regulates resource allocation to efficient use locations.

### 3. Connecting domestic economy and with the world
- Connecting regions and industries → a unified economic system.
- International market helps domestic economy expand and integrate.

## Conclusion

Market plays an important role in regulating the economy, promoting production and allocating resources efficiently, while creating motivation for development and innovation.
      `,
            japanese: `
# 市場と市場経済

## 2.2.1.1. 市場の概念

市場とは、決定された価格と数量で商品・サービスの売買・交換に関する経済関係の集合です。

### 市場は二つのレベルで存在：
- **具体的**: 市場、店舗、スーパーマーケット...
- **抽象的**: 需給関係、価格、商品-貨幣のシステム...

## 市場の分類

### 対象による:
- 商品市場
- サービス市場

### 範囲による:
- 国内市場
- 国際市場

### 交換要素による:
- 消費財
- 生産財

### 運営メカニズムによる:
- 自由市場
- 規制市場
- 完全/不完全競争

## 2.2.1.2. 市場の役割

### 1. 商品価値の実現、生産の促進
- 市場は商品消費を助ける ⇒ 市場拡大 ⇒ 生産刺激。

### 2. 革新の刺激、効率的資源配分
- 革新し、ニーズによく応える者は利益を得る ⇒ 継続的改善の動機。
- 市場は効率的使用場所への資源配分を自己調整する。

### 3. 国内経済と世界との結合
- 地域・産業を結合 → 統一された経済システム。
- 国際市場は国内経済の拡大・統合を助ける。

## 結論

市場は経済調整、生産促進、効率的資源配分において重要な役割を果たし、同時に発展と革新の動機を創出します。
      `,
        },
        excerpt: {
            vietnamese:
                'Khám phá khái niệm thị trường, các phân loại và vai trò quan trọng của thị trường trong nền kinh tế...',
            english:
                'Explore the concept of market, classifications and important role of market in the economy...',
            japanese: '市場の概念、分類、経済における市場の重要な役割を探る...',
        },
        author: 'Admin',
        date: '2024-01-08',
        readTime: {
            vietnamese: '9 phút',
            english: '9 minutes',
            japanese: '9分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question: 'Thị trường tồn tại ở mấy cấp độ?',
                    options: ['1 cấp độ', '2 cấp độ', '3 cấp độ', '4 cấp độ'],
                    correct: 1,
                },
                {
                    question: 'Vai trò nào KHÔNG phải của thị trường?',
                    options: [
                        'Thực hiện giá trị hàng hóa',
                        'Kích thích sáng tạo',
                        'Gắn kết nền kinh tế',
                        'Tạo ra hàng hóa',
                    ],
                    correct: 3,
                },
            ],
            english: [
                {
                    question: 'How many levels does the market exist at?',
                    options: ['1 level', '2 levels', '3 levels', '4 levels'],
                    correct: 1,
                },
                {
                    question: 'Which is NOT a role of the market?',
                    options: [
                        'Realizing commodity value',
                        'Stimulating innovation',
                        'Connecting the economy',
                        'Creating goods',
                    ],
                    correct: 3,
                },
            ],
            japanese: [
                {
                    question: '市場はいくつのレベルで存在しますか？',
                    options: ['1レベル', '2レベル', '3レベル', '4レベル'],
                    correct: 1,
                },
                {
                    question: '市場の役割でないものはどれですか？',
                    options: [
                        '商品価値の実現',
                        '革新の刺激',
                        '経済の結合',
                        '商品の創造',
                    ],
                    correct: 3,
                },
            ],
        },
    },
    5: {
        id: 5,
        section: '2.2.2' as SectionId,
        title: {
            vietnamese: 'Nền kinh tế thị trường và các quy luật',
            english: 'Market Economy and Economic Laws',
            japanese: '市場経済と経済法則',
        },
        content: {
            vietnamese: `
# Nền kinh tế thị trường và các quy luật chủ yếu

## 2.2.2.1. Khái niệm

Nền kinh tế thị trường là nền kinh tế vận hành theo cơ chế thị trường, trong đó:
- Sản xuất – trao đổi hàng hóa diễn ra thông qua thị trường.
- Chịu sự điều tiết của các quy luật kinh tế (cung – cầu, giá trị...).

## Đặc trưng phổ biến

- Đa dạng chủ thể kinh tế, sở hữu khác nhau nhưng bình đẳng trước pháp luật.
- Thị trường quyết định phân bổ nguồn lực thông qua các thị trường bộ phận.
- Giá cả theo nguyên tắc thị trường, cạnh tranh tạo động lực.
- Nhà nước điều tiết, khắc phục thất bại thị trường, đảm bảo công bằng.
- Kinh tế mở, gắn kết chặt chẽ thị trường nội địa và quốc tế.

## Ưu thế của nền kinh tế thị trường

- Tạo động lực sáng tạo, đổi mới cho các chủ thể kinh tế.
- Khai thác tốt tiềm năng, lợi thế của vùng, địa phương, quốc gia.
- Thỏa mãn tối đa nhu cầu của con người, thúc đẩy tiến bộ xã hội.

## Khuyết tật của nền kinh tế thị trường

- Tiềm ẩn rủi ro khủng hoảng kinh tế, khó dự đoán và khắc phục.
- Không tự khắc phục suy thoái môi trường, cạn kiệt tài nguyên.
- Gây phân hóa xã hội sâu sắc (giàu – nghèo, cơ hội…).

⇒ Vì vậy, không có nền kinh tế thị trường thuần túy mà luôn cần vai trò điều tiết của Nhà nước (kinh tế hỗn hợp).

## 2.2.2.2. Một số quy luật kinh tế chủ yếu

### 1. Quy luật giá trị

**Nội dung chính**: Sản xuất và trao đổi hàng hóa phải dựa trên hao phí lao động xã hội cần thiết. Giá cả thị trường xoay quanh giá trị hàng hóa.

**Tác động**:
- Điều tiết sản xuất – lưu thông
- Kích thích cải tiến kỹ thuật
- Phân hóa giàu nghèo

### 2. Quy luật cung – cầu

**Nội dung chính**: Giá cả chịu tác động bởi cung và cầu:
- Cung > cầu → giá giảm
- Cầu > cung → giá tăng
- Cung = cầu → giá = giá trị hàng hóa

### 3. Quy luật cạnh tranh

**Nội dung chính**: Cạnh tranh là sự ganh đua giữa các chủ thể kinh tế nhằm đạt được lợi ích (thị phần, lợi nhuận…).

**Vai trò của cạnh tranh**:
- Thúc đẩy đổi mới, cải tiến công nghệ
- Giảm giá thành, tăng chất lượng
- Loại bỏ các doanh nghiệp yếu kém

## Kết luận

Nền kinh tế thị trường chịu sự chi phối của các quy luật khách quan, đồng thời không thể thiếu vai trò điều tiết của Nhà nước để đảm bảo phát triển bền vững và công bằng xã hội.
      `,
            english: `
# Market Economy and Main Laws

## 2.2.2.1. Concept

Market economy is an economy operating according to market mechanisms, in which:
- Production and commodity exchange occur through the market.
- Subject to regulation by economic laws (supply-demand, value...).

## Common Characteristics

- Diverse economic subjects with different ownership but equal before the law.
- Market determines resource allocation through sectoral markets.
- Prices follow market principles, competition creates motivation.
- State regulation, overcoming market failures, ensuring fairness.
- Open economy, closely linking domestic and international markets.

## Advantages of Market Economy

- Creating motivation for innovation and renewal for economic subjects.
- Well exploiting potential and advantages of regions, localities, countries.
- Maximally satisfying human needs, promoting social progress.

## Disadvantages of Market Economy

- Hidden risks of economic crisis, difficult to predict and overcome.
- Cannot self-correct environmental degradation, resource depletion.
- Causing deep social stratification (rich-poor, opportunities...).

⇒ Therefore, there is no pure market economy but always needs state regulation (mixed economy).

## 2.2.2.2. Some Main Economic Laws

### 1. Law of Value

**Main content**: Production and commodity exchange must be based on necessary social labor expenditure. Market prices revolve around commodity value.

**Impact**:
- Regulating production-circulation
- Stimulating technical innovation
- Creating wealth differentiation

### 2. Law of Supply and Demand

**Main content**: Prices are affected by supply and demand:
- Supply > demand → price decreases
- Demand > supply → price increases
- Supply = demand → price = commodity value

### 3. Law of Competition

**Main content**: Competition is rivalry between economic subjects to achieve benefits (market share, profit...).

**Role of competition**:
- Promoting innovation, technological improvement
- Reducing costs, increasing quality
- Eliminating weak enterprises

## Conclusion

Market economy is governed by objective laws, while state regulation is indispensable to ensure sustainable development and social equity.
      `,
            japanese: `
# 市場経済と主要法則

## 2.2.2.1. 概念

市場経済とは市場メカニズムに従って運営される経済であり、その中で：
- 生産と商品交換は市場を通じて行われる。
- 経済法則（需給、価値...）の調整を受ける。

## 一般的特徴

- 異なる所有権を持つが法の前では平等な多様な経済主体。
- 市場が部門別市場を通じて資源配分を決定。
- 市場原則に従う価格、競争が動機を創出。
- 国家調整、市場の失敗の克服、公平性の確保。
- 開放経済、国内外市場の密接な結合。

## 市場経済の利点

- 経済主体の革新と刷新の動機創出。
- 地域、地方、国の潜在力と利点の良好な活用。
- 人間のニーズの最大満足、社会進歩の促進。

## 市場経済の欠点

- 経済危機の潜在リスク、予測・克服困難。
- 環境悪化、資源枯渇の自己修正不可。
- 深刻な社会分化（富裕-貧困、機会...）の原因。

⇒ したがって、純粋な市場経済は存在せず、常に国家調整の役割が必要（混合経済）。

## 2.2.2.2. 主要経済法則

### 1. 価値法則

**主要内容**: 生産と商品交換は必要社会労働支出に基づかなければならない。市場価格は商品価値を中心に回転。

**影響**:
- 生産-流通の調整
- 技術革新の刺激
- 富の分化創出

### 2. 需給法則

**主要内容**: 価格は需給に影響される：
- 供給 > 需要 → 価格下落
- 需要 > 供給 → 価格上昇
- 供給 = 需要 → 価格 = 商品価値

### 3. 競争法則

**主要内容**: 競争は利益（市場シェア、利潤...）を達成するための経済主体間の競争。

**競争の役割**:
- 革新、技術改善の促進
- コスト削減、品質向上
- 弱い企業の淘汰

## 結論

市場経済は客観的法則に支配されると同時に、持続可能な発展と社会公平を確保するための国家調整が不可欠です。
      `,
        },
        excerpt: {
            vietnamese:
                'Tìm hiểu về nền kinh tế thị trường, các đặc trưng, ưu khuyết điểm và các quy luật kinh tế chủ yếu...',
            english:
                'Learn about market economy, characteristics, advantages and disadvantages, and main economic laws...',
            japanese: '市場経済、特徴、利点と欠点、主要経済法則について学ぶ...',
        },
        author: 'Admin',
        date: '2024-01-05',
        readTime: {
            vietnamese: '15 phút',
            english: '15 minutes',
            japanese: '15分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question:
                        'Theo quy luật cung - cầu, khi cung > cầu thì giá sẽ:',
                    options: ['Tăng', 'Giảm', 'Không đổi', 'Dao động'],
                    correct: 1,
                },
                {
                    question:
                        'Khuyết tật nào KHÔNG phải của nền kinh tế thị trường?',
                    options: [
                        'Phân hóa xã hội',
                        'Khủng hoảng kinh tế',
                        'Suy thoái môi trường',
                        'Tăng trưởng chậm',
                    ],
                    correct: 3,
                },
            ],
            english: [
                {
                    question:
                        'According to supply-demand law, when supply > demand, price will:',
                    options: [
                        'Increase',
                        'Decrease',
                        'Stay unchanged',
                        'Fluctuate',
                    ],
                    correct: 1,
                },
                {
                    question: 'Which is NOT a disadvantage of market economy?',
                    options: [
                        'Social stratification',
                        'Economic crisis',
                        'Environmental degradation',
                        'Slow growth',
                    ],
                    correct: 3,
                },
            ],
            japanese: [
                {
                    question: '需給法則によると、供給 > 需要の時、価格は：',
                    options: ['上昇', '下落', '変化なし', '変動'],
                    correct: 1,
                },
                {
                    question: '市場経済の欠点でないものはどれですか？',
                    options: ['社会分化', '経済危機', '環境悪化', '成長鈍化'],
                    correct: 3,
                },
            ],
        },
    },
    6: {
        id: 6,
        section: '3.1.1',
        title: {
            vietnamese: 'Khái niệm tư bản',
            english: 'Concept of Capital',
            japanese: '資本の概念',
        },
        content: {
            vietnamese: `
# Tư bản là gì?

Theo Mác, **tư bản** không chỉ là tiền hay tư liệu sản xuất; đó là **giá trị mang lại giá trị thặng dư** thông qua bóc lột lao động làm thuê. Tư bản gồm hai bộ phận:
1. **Tư bản bất biến (c)** – máy móc, nguyên liệu; giá trị chuyển nguyên vẹn vào sản phẩm.
2. **Tư bản khả biến (v)** – tiền lương; tạo ra giá trị mới lớn hơn bản thân nó.

Khi kết hợp trong quá trình sản xuất, v → c + m (m là giá trị thặng dư).`,
            english: `
# What is Capital?

For Marx, **capital** is value that reproduces itself with a surplus by exploiting wage labour. It splits into:
1. **Constant capital (c)** – machinery, raw materials (transfer their value).
2. **Variable capital (v)** – wages (creates new value > v).

Thus after production: v → c + m (surplus value).`,
            japanese: `
# 資本とは？

マルクスによれば、**資本**とは賃労働の搾取を通じて剰余価値を生む自己増殖する価値である。区分は:
1. **不変資本 (c)** ― 機械・原材料（価値をそのまま移転）
2. **可変資本 (v)** ― 賃金（vより大きい新価値を創出）

生産結果: v → c + m（剰余価値 m）。`,
        },
        excerpt: {
            vietnamese:
                'Làm rõ khái niệm tư bản và hai bộ phận bất biến – khả biến theo Mác…',
            english:
                'Clarifies Marx’s concept of capital and its constant/variable parts…',
            japanese: 'マルクスの資本概念と不変・可変資本を解説…',
        },
        author: 'Admin',
        date: '2024-01-03',
        readTime: {
            vietnamese: '6 phút',
            english: '6 minutes',
            japanese: '6分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: 'Tư bản khả biến là gì?',
                    options: ['Máy móc', 'Nguyên liệu', 'Tiền lương', 'Thuế'],
                    correct: 2,
                },
            ],
            english: [
                {
                    question: 'Variable capital refers to…',
                    options: [
                        'Machinery',
                        'Raw materials',
                        'Wages',
                        'Land rent',
                    ],
                    correct: 2,
                },
            ],
            japanese: [
                {
                    question: '可変資本とは何を指す？',
                    options: ['機械', '原材料', '賃金', '地代'],
                    correct: 2,
                },
            ],
        },
    },
    7: {
        id: 7,
        section: '3.1.2' as SectionId,
        title: {
            vietnamese: 'Công thức chung của tư bản',
            english: 'General Formula of Capital',
            japanese: '資本の一般公式',
        },
        content: {
            vietnamese: `
# Công thức chung của tư bản

Mác khái quát chu trình vận động của tư bản dưới dạng **M – H – M'**  
(M = Tiền, H = Hàng, M' = Tiền tăng thêm).

1. **M → H**  
   Nhà tư bản dùng tiền mua **tư liệu sản xuất (TĐS)** và **sức lao động (SLĐ)**.

2. **H (SX) … H'**  
   Trong quá trình sản xuất, SLĐ tạo ra giá trị mới **v + m** (v = giá trị sức lao động, m = giá trị thặng dư).

3. **H' → M'**  
   H' bán đi thu về **M' = M + ΔM** (ΔM chính là giá trị thặng dư).

Điều cốt lõi: mục đích không phải **hàng hóa** mà là **tiền nhiều hơn**. Vì vậy công thức này thể hiện bản chất **tự vận động tăng giá trị** của tư bản.
`,
            english: `
# General Formula of Capital

Marx summarizes the circuit of capital as **M – C – M'**  
(M = Money, C = Commodity, M' = Money plus surplus).

1. **M → C**  
   Capitalist spends money to buy **means of production (MP)** and **labour-power (LP)**.

2. **C (production) … C'**  
   In production LP creates new value **v + m** (v = value of labour-power, m = surplus value).

3. **C' → M'**  
   Selling C' brings back **M' = M + ΔM** where ΔM is surplus value.

Key point: the goal is not commodities but **more money**, revealing capital’s self-expanding nature.
`,
            japanese: `
# 資本の一般公式

マルクスは資本の循環を **Ｇ – Ｗ – Ｇ'** と要約する  
(Ｇ = 貨幣, Ｗ = 商品, Ｇ' = 増殖した貨幣)。

1. **Ｇ → Ｗ**  
   資本家は貨幣で**生産手段**と**労働力**を購入。

2. **Ｗ（生産） … Ｗ'**  
   生産過程で労働力は **v + m** の新価値を生む（v = 労働力価値, m = 剰余価値）。

3. **Ｗ' → Ｇ'**  
   Ｗ' を売却して **Ｇ' = Ｇ + ΔＧ** を得る。ΔＧ が剰余価値。

目的は商品ではなく**より多くの貨幣**—これが資本の自己増殖本質である。
`,
        },
        excerpt: {
            vietnamese:
                "Giải thích chu trình M – H – M' và ý nghĩa tự tăng giá trị của tư bản theo Mác…",
            english:
                "Explains the M – C – M' circuit and the self-expanding nature of capital in Marxist theory…",
            japanese: "Ｇ – Ｗ – Ｇ' の循環と資本の自己増殖本質を解説…",
        },
        author: 'Admin',
        date: '2024-01-02',
        readTime: {
            vietnamese: '7 phút',
            english: '7 minutes',
            japanese: '7分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: "Trong công thức M – H – M', ΔM là gì?",
                    options: [
                        'Tư liệu sản xuất',
                        'Sức lao động',
                        'Giá trị thặng dư',
                        'Tiền lương',
                    ],
                    correct: 2,
                },
                {
                    question:
                        'Mục đích cuối cùng của nhà tư bản trong chu trình là:',
                    options: [
                        'Sở hữu hàng hóa',
                        'Gia tăng tiền tệ',
                        'Mua sức lao động',
                        'Tạo ra sản phẩm mới',
                    ],
                    correct: 1,
                },
            ],
            english: [
                {
                    question: "In M – C – M', what does ΔM represent?",
                    options: [
                        'Means of production',
                        'Surplus value',
                        'Wages',
                        'Commodity value',
                    ],
                    correct: 1,
                },
                {
                    question:
                        'The ultimate aim of the capitalist circuit is to obtain:',
                    options: [
                        'Commodities',
                        'More money',
                        'Raw materials',
                        'Labour-power',
                    ],
                    correct: 1,
                },
            ],
            japanese: [
                {
                    question: "Ｇ – Ｗ – Ｇ' における ΔＧ は何か？",
                    options: ['生産手段', '剰余価値', '賃金', '商品の価値'],
                    correct: 1,
                },
                {
                    question: '資本家の最終目的は？',
                    options: [
                        '商品所有',
                        '貨幣増殖',
                        '労働力購入',
                        '新製品創造',
                    ],
                    correct: 1,
                },
            ],
        },
    },
    8: {
        id: 8,
        section: '3.1.3' as SectionId,
        title: {
            vietnamese: 'Quá trình sản xuất giá trị thặng dư',
            english: 'Production of Surplus Value',
            japanese: '剰余価値の生産過程',
        },
        content: {
            vietnamese: `
# Sản xuất giá trị thặng dư

## 1. Giá trị thặng dư là gì?
Phần giá trị mới mà công nhân tạo ra **vượt** giá trị sức lao động của họ (tiền lương) trong cùng thời gian lao động.

## 2. Phương pháp tạo giá trị thặng dư
### a. Thặng dư tuyệt đối
- **Kéo dài ngày lao động** (8h → 10h).  
- Thời gian lao động cần thiết giữ nguyên, thời gian lao động thặng dư tăng.

### b. Thặng dư tương đối
- **Rút ngắn thời gian lao động cần thiết** nhờ tăng năng suất.  
- Ngày lao động vẫn 8h nhưng 4h cần thiết → 4h thặng dư → 5h thặng dư.

## 3. Hệ quả
- Thúc đẩy cách mạng công nghiệp, cải tiến kỹ thuật.
- Tái diễn quá trình tích lũy và mở rộng tái sản xuất tư bản.
`,
            english: `
# Production of Surplus Value

## 1. Definition
The part of new value created by workers that **exceeds** the value of their labour-power (wages) within the working day.

## 2. Ways to create surplus value
### a. Absolute surplus value
- **Lengthen the working day** (8h → 10h).  
- Necessary labour time unchanged; surplus labour time grows.

### b. Relative surplus value
- **Shorten necessary labour time** via higher productivity.  
- Working day still 8h, but necessary time 3h → surplus 5h.

## 3. Consequences
- Drives industrial revolutions and technical innovation.
- Fuels accumulation and expanded reproduction of capital.
`,
            japanese: `
# 剰余価値の生産過程

## 1. 定義
労働者が一日で生み出す新価値のうち、**賃金を超える部分**。

## 2. 剰余価値獲得の方法
### a. 絶対的剰余価値
- **労働日を延長**（8時間 → 10時間）。  
- 必要労働時間は同じで、剰余労働時間が増える。

### b. 相対的剰余価値
- 生産性向上で**必要労働時間を短縮**。  
- 労働日は8時間のまま、必要3時間 → 剰余5時間。

## 3. 結果
- 産業革命と技術革新を促進。
- 資本の蓄積と拡大再生産を支える。
`,
        },
        excerpt: {
            vietnamese:
                'Phân tích hai phương pháp tạo ra giá trị thặng dư: tuyệt đối và tương đối…',
            english:
                'Analyses the two methods of generating surplus value: absolute and relative…',
            japanese: '絶対的・相対的剰余価値の獲得方法を解説…',
        },
        author: 'Admin',
        date: '2024-01-01',
        readTime: {
            vietnamese: '8 phút',
            english: '8 minutes',
            japanese: '8分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: 'Thặng dư tuyệt đối đạt được bằng cách nào?',
                    options: [
                        'Tăng năng suất',
                        'Kéo dài ngày lao động',
                        'Giảm tiền lương',
                        'Giảm giá nguyên liệu',
                    ],
                    correct: 1,
                },
                {
                    question: 'Điều gì đặc trưng cho thặng dư tương đối?',
                    options: [
                        'Ngày lao động dài hơn',
                        'Năng suất lao động cao hơn',
                        'Tăng giờ nghỉ',
                        'Giảm quy mô sản xuất',
                    ],
                    correct: 1,
                },
            ],
            english: [
                {
                    question: 'Absolute surplus value is obtained by:',
                    options: [
                        'Raising productivity',
                        'Lengthening the working day',
                        'Cutting wages',
                        'Cheaper raw materials',
                    ],
                    correct: 1,
                },
                {
                    question: 'Relative surplus value relies on:',
                    options: [
                        'Longer hours',
                        'Higher productivity',
                        'Overtime pay',
                        'Less machinery',
                    ],
                    correct: 1,
                },
            ],
            japanese: [
                {
                    question: '絶対的剰余価値を得る方法は？',
                    options: [
                        '生産性向上',
                        '労働日の延長',
                        '賃下げ',
                        '原料価格低下',
                    ],
                    correct: 1,
                },
                {
                    question: '相対的剰余価値の特徴は？',
                    options: [
                        '長時間労働',
                        '生産性向上',
                        '休憩増加',
                        '生産縮小',
                    ],
                    correct: 1,
                },
            ],
        },
    },
    9: {
        id: 9,
        section: '3.2.1' as SectionId,
        title: {
            vietnamese: 'Lợi nhuận và tỷ suất lợi nhuận',
            english: 'Profit and Rate of Profit',
            japanese: '利潤と利潤率',
        },
        content: {
            vietnamese: `
# Lợi nhuận và tỷ suất lợi nhuận

- **Lợi nhuận (P)**: phần giá trị thặng dư (m) mà nhà tư bản **nhìn thấy** sau khi bán hàng hóa, vì giá trị thặng dư được “ẩn” dưới dạng chênh lệch giữa M' và M.

- **Tỷ suất lợi nhuận (r)** = \\( \\dfrac{P}{c + v} \\times 100\\% \\)  
  cho biết hiệu quả sử dụng toàn bộ tư bản.

## Quy luật khuynh hướng giảm sút của tỷ suất lợi nhuận
- Do sự gia tăng thành phần **c (tư bản bất biến)** nhanh hơn v.  
- Bị bù trừ bởi tăng cường bóc lột, hạ giá trị TĐS, thương mại, xuất khẩu tư bản…

→ Giải thích xu hướng khủng hoảng và cạnh tranh gay gắt trong CNTB.
`,
            english: `
# Profit and Rate of Profit

- **Profit (P)**: the **visible** form of surplus value (m) realized when the capitalist sells the commodity; m is disguised as the excess of M' over M.

- **Rate of Profit (r)** = \\( \\dfrac{P}{c + v} \\times 100\\% \\)  
  measures how efficiently total capital is employed.

## Law of the Tendency of the Rate of Profit to Fall
- Caused by faster growth in **c (constant capital)** relative to v.  
- Counteracted by greater exploitation, cheaper MP, commerce, capital export…

→ Explains crises and fierce competition in capitalism.
`,
            japanese: `
# 利潤と利潤率

- **利潤 (P)**: 剰余価値 (m) が Ｇ' と Ｇ の差として**可視化**されたもの。

- **利潤率 (r)** = \\( \\dfrac{P}{c + v} \\times 100\\% \\)  
  総資本利用効率を示す。

## 利潤率低下傾向の法則
- **不変資本 (c)** が可変資本より速く増大。  
- 搾取強化、生産手段値下げ、商業利潤、資本輸出などが反作用。

→ 資本主義の危機と競争激化を説明。
`,
        },
        excerpt: {
            vietnamese:
                'Trình bày khái niệm lợi nhuận, công thức tính tỷ suất lợi nhuận và xu hướng giảm sút…',
            english:
                'Introduces profit, the rate-of-profit formula and its falling tendency…',
            japanese: '利潤・利潤率とその低下傾向を概説…',
        },
        author: 'Admin',
        date: '2023-12-30',
        readTime: {
            vietnamese: '6 phút',
            english: '6 minutes',
            japanese: '6分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: 'Tỷ suất lợi nhuận được tính trên cơ sở nào?',
                    options: ['m/v', 'P/(c+v)', 'm/(c+v)', 'P/v'],
                    correct: 1,
                },
                {
                    question: 'Nguyên nhân chính làm r có xu hướng giảm?',
                    options: [
                        'Giảm thời gian lao động',
                        'Tăng nhanh tư bản bất biến',
                        'Giảm lương công nhân',
                        'Khủng hoảng tài chính',
                    ],
                    correct: 1,
                },
            ],
            english: [
                {
                    question: 'Rate of profit r equals:',
                    options: ['m/v', 'P/(c+v)', 'm/(c+v)', 'P/v'],
                    correct: 1,
                },
                {
                    question: 'Why does r tend to fall?',
                    options: [
                        'Shorter working day',
                        'Faster rise of constant capital',
                        'Lower wages',
                        'Stock crashes',
                    ],
                    correct: 1,
                },
            ],
            japanese: [
                {
                    question: '利潤率 r の式は？',
                    options: ['m/v', 'P/(c+v)', 'm/(c+v)', 'P/v'],
                    correct: 1,
                },
                {
                    question: '利潤率低下の主因は？',
                    options: [
                        '労働時間短縮',
                        '不変資本の急増',
                        '賃金引下げ',
                        '金融恐慌',
                    ],
                    correct: 1,
                },
            ],
        },
    },
    10: {
        id: 10,
        section: '3.2.2' as SectionId,
        title: {
            vietnamese: 'Tiền công và quỹ tiền lương',
            english: 'Wages and Wage Fund',
            japanese: '賃金と賃金基金',
        },
        content: {
            vietnamese: `
# Tiền công theo Mác

## 1. Bản chất
- **Tiền công** là **giá cả của sức lao động**, chứ không phải giá trị lao động.
- Lao động sống tạo ra giá trị mới v + m, nhưng công nhân chỉ nhận **v**.

## 2. Hình thức
- **Tiền công danh nghĩa**: số tiền tuyệt đối (VND, USD…).
- **Tiền công thực tế**: lượng hàng hóa, dịch vụ mua được.

## 3. Quỹ tiền lương
Phần **tư bản khả biến (v)** mà nhà tư bản ứng trước để mua sức lao động; biến động theo quy mô sản xuất và nhu cầu lao động.
`,
            english: `
# Marxian Wages

## 1. Essence
- **Wage** is the **price of labour-power**, not of labour itself.
- Living labour creates v + m; the worker receives only **v**.

## 2. Forms
- **Nominal wage**: money amount (USD, VND…).
- **Real wage**: goods and services that money can buy.

## 3. Wage Fund
The **variable capital (v)** advanced to purchase labour-power; changes with production scale and labour demand.
`,
            japanese: `
# マルクスの賃金論

## 1. 本質
- **賃金**は**労働力の価格**であり、労働そのものの価格ではない。
- 生きた労働は v + m を生むが、労働者は **v** しか得ない。

## 2. 形態
- **名目賃金**: 貨幣額。
- **実質賃金**: 購入可能な財・サービス量。

## 3. 賃金基金
労働力購入のため資本家が前貸しする**可変資本 (v)**；生産規模・労働需要で変動。
`,
        },
        excerpt: {
            vietnamese:
                'Làm rõ bản chất tiền công, phân biệt danh nghĩa – thực tế và khái niệm quỹ tiền lương…',
            english:
                'Clarifies the nature of wages, nominal vs real, and the wage fund concept…',
            japanese: '賃金の本質・名目と実質、賃金基金を解説…',
        },
        author: 'Admin',
        date: '2023-12-28',
        readTime: {
            vietnamese: '5 phút',
            english: '5 minutes',
            japanese: '5分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: 'Tiền công thực tế phản ánh:',
                    options: [
                        'Giá vàng',
                        'Sức mua hàng hóa',
                        'Tỷ giá hối đoái',
                        'Giờ làm việc',
                    ],
                    correct: 1,
                },
            ],
            english: [
                {
                    question: 'Real wage measures:',
                    options: [
                        'Gold price',
                        'Purchasing power',
                        'Exchange rate',
                        'Working hours',
                    ],
                    correct: 1,
                },
            ],
            japanese: [
                {
                    question: '実質賃金は何を示す？',
                    options: ['金価格', '購買力', '為替レート', '労働時間'],
                    correct: 1,
                },
            ],
        },
    },
    11: {
        id: 11,
        section: '3.2.3' as SectionId,
        title: {
            vietnamese: 'Địa tô và thuế đất',
            english: 'Rent and Land Tax',
            japanese: '地代と地租',
        },
        content: {
            vietnamese: `
# Địa tô trong chủ nghĩa tư bản

## 1. Địa tô tuyệt đối
- Phát sinh do **quyền sở hữu ruộng đất** độc quyền.
- Tất cả tư bản nông nghiệp đều phải nộp, bất kể độ phì.

## 2. Địa tô chênh lệch
- Do **độ phì nhiêu và vị trí** khác nhau của đất.
- Ruộng tốt, gần chợ → chi phí thấp → lợi nhuận cao hơn trung bình → tạo địa tô.

## 3. Thuế đất
Nhà nước thu một phần địa tô dưới dạng thuế nhằm tái phân phối và đầu tư công.
`,
            english: `
# Ground Rent in Capitalism

## 1. Absolute Rent
- Arises from **monopoly of land ownership**.
- All agricultural capital must pay it, regardless of fertility.

## 2. Differential Rent
- Comes from **differences in soil fertility and location**.
- Better land yields surplus profit above average → rent.

## 3. Land Tax
State captures part of rent via taxation for redistribution and public investment.
`,
            japanese: `
# 資本主義における地代

## 1. 絶対地代
- **土地所有独占**から生じる。
- 肥沃度に関係なくすべての農業資本が支払う。

## 2. 差額地代
- **土地肥沃度・立地**の差による。
- 良地は平均以上の超過利潤 → 地代。

## 3. 地租
国家は税として一部地代を回収し、再分配・公共投資に充当。
`,
        },
        excerpt: {
            vietnamese:
                'Trình bày địa tô tuyệt đối, địa tô chênh lệch và vai trò thuế đất trong CNTB…',
            english:
                'Covers absolute and differential rent along with the role of land tax in capitalism…',
            japanese: '絶対地代・差額地代と地租の役割を解説…',
        },
        author: 'Admin',
        date: '2023-12-25',
        readTime: {
            vietnamese: '5 phút',
            english: '5 minutes',
            japanese: '5分',
        },
        image: '/placeholder.svg?height=200&width=400',
        originalLanguage: 'vietnamese',
        quiz: {
            vietnamese: [
                {
                    question: 'Địa tô chênh lệch xuất phát từ yếu tố nào?',
                    options: [
                        'Độc quyền đất',
                        'Khác biệt độ phì và vị trí',
                        'Thuế đất cao',
                        'Tiền lương thấp',
                    ],
                    correct: 1,
                },
            ],
            english: [
                {
                    question: 'Differential rent arises from:',
                    options: [
                        'Land monopoly',
                        'Differences in fertility and location',
                        'High land tax',
                        'Low wages',
                    ],
                    correct: 1,
                },
            ],
            japanese: [
                {
                    question: '差額地代は何に起因？',
                    options: [
                        '土地独占',
                        '肥沃度・立地の差',
                        '高い地租',
                        '低賃金',
                    ],
                    correct: 1,
                },
            ],
        },
    },
}

export type BlogData = typeof blogData
export type BlogId = keyof BlogData
export type Language = 'vietnamese' | 'english' | 'japanese'
