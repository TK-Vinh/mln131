'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { philosophyBlogs, type ChapterId } from '@/data/philosophy-chapters'
import {
    BookOpen,
    Building2,
    Scale,
    ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type LocalizedText = {
    vietnamese: string
    english: string
    japanese: string
}

type ChapterCard = {
    chapterId: ChapterId
    icon: LucideIcon
    gradient: string
    border: string
    accent: string
    iconBg: string
    buttonHover: string
    description: LocalizedText
}

const chapterCards: ChapterCard[] = [
    {
        chapterId: '4.1',
        icon: BookOpen,
        gradient:
            'from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        accent: 'bg-purple-500/10',
        iconBg: 'bg-purple-500',
        buttonHover: 'group-hover:bg-purple-500 group-hover:text-white',
        description: {
            vietnamese:
                'Ôn tập khái niệm dân chủ, tiến trình hình thành và đặc trưng của dân chủ xã hội chủ nghĩa.',
            english:
                'Review the foundations of democracy, its historical development, and the features of socialist democracy.',
            japanese: 'コンテンツ準備中です。',
        },
    },
    {
        chapterId: '4.2',
        icon: Building2,
        gradient:
            'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
        border: 'border-emerald-200 dark:border-emerald-800',
        accent: 'bg-emerald-500/10',
        iconBg: 'bg-emerald-500',
        buttonHover: 'group-hover:bg-emerald-500 group-hover:text-white',
        description: {
            vietnamese:
                'Tổng hợp kiến thức về sự ra đời, bản chất, chức năng và vai trò của nhà nước xã hội chủ nghĩa.',
            english:
                'Consolidate knowledge about the emergence, nature, functions, and role of the socialist state.',
            japanese: 'コンテンツ準備中です。',
        },
    },
    {
        chapterId: '4.3',
        icon: Scale,
        gradient:
            'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
        border: 'border-amber-200 dark:border-amber-800',
        accent: 'bg-amber-500/10',
        iconBg: 'bg-amber-500',
        buttonHover: 'group-hover:bg-amber-500 group-hover:text-white',
        description: {
            vietnamese:
                'Khám phá dân chủ xã hội chủ nghĩa và nhà nước pháp quyền xã hội chủ nghĩa trong thực tiễn Việt Nam hiện nay.',
            english:
                'Explore socialist democracy and the socialist rule-of-law state in contemporary Vietnam.',
            japanese: 'コンテンツ準備中です。',
        },
    },
]

export default function QuizOverviewPage() {
    const { t, getLocalizedContent } = useLanguage()

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mt-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {t('quiz.quiz')}
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    {t('quiz.selectBlogPrompt')} {/* Thêm dòng này vào translations.ts */}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {chapterCards.map((card) => {
                        const Icon = card.icon
                        const chapter = philosophyBlogs[card.chapterId]

                        return (
                            <div
                                key={card.chapterId}
                                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-8 border ${card.border} hover:shadow-2xl transition-all duration-300`}
                            >
                                <div
                                    className={`absolute top-0 right-0 w-32 h-32 ${card.accent} rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    <div
                                        className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center mb-4`}
                                    >
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">
                                        {getLocalizedContent(chapter.title)}
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        {getLocalizedContent(card.description)}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className={`${card.buttonHover} transition-colors`}
                                        >
                                            <Link href={`/quiz/${card.chapterId}`}>
                                                {t('home.explore')}{' '}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <span className="text-sm text-muted-foreground">
                                            {`${chapter.sections.length} ${t('home.articles')}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}