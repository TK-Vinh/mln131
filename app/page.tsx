'use client'

import { BlogCard } from '@/components/blog-card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { blogData } from '@/data/blog-data'
import {
    ArrowRight,
    BookOpen,
    Brain,
    Globe,
    Sparkles,
    TrendingUp,
    Video,
} from 'lucide-react'
import Link from 'next/link'

// Convert blog data to array format for homepage
const blogs = Object.values(blogData)
    .slice(0, 3)
    .map((blog) => ({
        id: blog.id,
        section: blog.section,
        title: blog.title,
        excerpt: blog.excerpt,
        author: blog.author,
        date: blog.date,
        readTime: blog.readTime,
        image: blog.image,
        originalLanguage: blog.originalLanguage,
    }))

export default function HomePage() {
    const { t } = useLanguage()

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="text-center mb-16 relative overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
                {/* Enhanced Background Effects - Classic Purple-Blue-Emerald */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15"></div>
                    <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-12"></div>
                    <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10"></div>
                    <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-8 dark:opacity-5"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 -z-5 overflow-hidden">
                    <div className="absolute top-20 left-10 w-6 h-6 bg-purple-500/15 rounded-full"></div>
                    <div className="absolute top-40 right-16 w-4 h-4 bg-blue-500/20 rounded-full"></div>
                    <div className="absolute bottom-32 left-20 w-8 h-8 bg-emerald-500/15 rounded-full"></div>
                    <div className="absolute top-60 left-1/2 w-5 h-5 bg-pink-500/15 rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-7 h-7 bg-yellow-500/20 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                            {t('home.title')}
                        </h1>
                    </div>
                    <div className="animate-fade-in-up delay-200">
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                            {t('home.subtitle')}
                        </p>
                    </div>
                    <div className="animate-fade-in-up delay-400">
                        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
                            {t('home.heroDescription')}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-600">
                        <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 transform hover:scale-105 transition-all duration-300">
                            <Link href="/blogs">
                                <BookOpen className="mr-2 h-5 w-5" />
                                {t('home.readBlog')}
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-3 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <Link href="/videos">
                                <Video className="mr-2 h-5 w-5" />
                                {t('home.watchVideos')}
                            </Link>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="text-lg px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white dark:from-pink-400 dark:to-rose-400 dark:hover:from-pink-500 dark:hover:to-rose-500 transform hover:scale-105 transition-all duration-300"
                            asChild
                        >
                            <Link href="/quiz">
                                <Sparkles className="mr-2 h-5 w-5" />
                                {t('home.exploreNow')}
                            </Link>
                        </Button>
                    </div>

                    {/* Enhanced Quick Stats */}
                    <div className="flex justify-center space-x-8 text-sm text-muted-foreground animate-fade-in-up delay-800">
                        <div className="flex items-center group cursor-pointer">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                            <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">50+ {t('home.articlesCount')}</span>
                        </div>
                        <div className="flex items-center group cursor-pointer">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                            <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">3 {t('home.languagesSupported')}</span>
                        </div>
                        <div className="flex items-center group cursor-pointer">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                            <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">AI Assistant</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blogs Overview */}
            <section className="mt-20">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                        {t('home.exploreBlogs')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Enhanced Blog 2 Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 p-8 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-400/25 transition-all duration-500 hover:-translate-y-2 animate-fade-in-left">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/15 to-purple-500/15 rounded-full translate-y-16 -translate-x-16 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                <BookOpen className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                {t('home.blog2Title')}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {t('home.blog2Description')}
                            </p>
                            <div className="flex items-center justify-between">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 hover:scale-105"
                                >
                                    <Link href="/blogs?blog=2.1">
                                        {t('home.explore')}{' '}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                                        6 {t('home.articles')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Blog 3 Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-teal-900/20 p-8 border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-2xl hover:shadow-emerald-500/25 dark:hover:shadow-emerald-400/25 transition-all duration-500 hover:-translate-y-2 animate-fade-in-right">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/15 to-emerald-500/15 rounded-full translate-y-16 -translate-x-16 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {t('home.blog3Title')}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {t('home.blog3Description')}
                            </p>
                            <div className="flex items-center justify-between">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 hover:scale-105"
                                >
                                    <Link href="/blogs?blog=3.1">
                                        {t('home.explore')}{' '}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 rounded-full">
                                    <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                        6 {t('home.articles')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured blogs */}
            <section className="mt-20">
                <div className="flex items-center justify-between mb-12 animate-fade-in-up">
                    <div>
                        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                            {t('home.latestPosts')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('home.featuredPostsDescription')}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        asChild
                        className="hidden md:flex bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-300 dark:border-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                        <Link href="/blogs">
                            {t('home.viewAll')}{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            className={`transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                <div className="relative">
                                    <BlogCard blog={blog} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden animate-fade-in-up delay-600">
                    <Button variant="outline" asChild className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-300 dark:border-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                        <Link href="/blogs">
                            {t('home.viewAll')}{' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <section className="mt-20 relative animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-emerald-600/5 dark:from-purple-400/5 dark:via-blue-400/5 dark:to-emerald-400/5 rounded-3xl"></div>
                <div className="relative bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-emerald-600/10 dark:from-purple-400/10 dark:via-blue-400/10 dark:to-emerald-400/10 rounded-3xl p-12 border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                            {t('home.statsTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('home.statsDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group animate-fade-in-up delay-200">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                                <BookOpen className="h-12 w-12 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                20+
                            </h3>
                            <p className="text-muted-foreground text-lg font-medium">
                                {t('home.articlesCount')}
                            </p>
                            <p className="text-sm text-muted-foreground/70 mt-2">
                                {t('home.weeklyUpdates')}
                            </p>
                        </div>

                        <div className="text-center group animate-fade-in-up delay-400">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-800/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50">
                                <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-800 dark:from-blue-400 dark:to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                3
                            </h3>
                            <p className="text-muted-foreground text-lg font-medium">
                                {t('home.languagesSupported')}
                            </p>
                            <p className="text-sm text-muted-foreground/70 mt-2">
                                {t('home.languageSupport')}
                            </p>
                        </div>

                        <div className="text-center group animate-fade-in-up delay-600">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-800/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/50">
                                <Brain className="h-12 w-12 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                20+
                            </h3>
                            <p className="text-muted-foreground text-lg font-medium">
                                {t('home.quizQuestions')}
                            </p>
                            <p className="text-sm text-muted-foreground/70 mt-2">
                                {t('home.interactiveQuiz')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
