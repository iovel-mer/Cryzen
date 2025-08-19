"use client";

import { useTranslations } from "next-intl";
import { Header } from "../../components/Header/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Zap,
  Shield,
  HelpCircle,
  Clock,
  User,
  Home,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const t = useTranslations("blog");

  const tableOfContents = [
    { id: "overview", title: t("overview.title"), icon: BookOpen },
    { id: "quickStart", title: t("quickStart.title"), icon: Zap },
    { id: "authentication", title: t("authentication.title"), icon: Shield },
    { id: "faq", title: t("faq.title"), icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
    <div className="mx-auto min-h-screen pt-16 sm:pt-20 lg:pt-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] pointer-events-none" />
      
      {/* Modern Background Effects */}
      <div className="hidden sm:block absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-emerald-500/15 to-violet-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-violet-600/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Particles - Hidden on mobile */}
      <div className="hidden sm:block absolute top-40 left-40 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-60"></div>
      <div className="hidden sm:block absolute top-60 right-60 w-2 h-2 bg-violet-600 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="hidden lg:block absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      
      {/* Back to Home Button */}
      <div className="px-3 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-10">
        <Link
          href="/"
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
        >
          <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400" />
          <span className="sm:block">{t("backToHome")}</span>
          
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400" />
        </Link>
      </div>

      <main className="container mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-emerald-500 mb-4 sm:mb-6 tracking-wide drop-shadow-lg leading-tight">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900/60 text-violet-200 rounded-full border border-emerald-400/30">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-900/60 text-violet-200 rounded-full border border-emerald-400/30">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <article className="prose prose-lg prose-gray max-w-none">
              
              <section id="overview" className="mb-8 sm:mb-12">
                <Card className="bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:border-emerald-400/40 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-white">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-lg sm:rounded-xl shadow-lg shadow-emerald-500/30 flex-shrink-0">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-600 m-0 tracking-wide leading-tight">
                        {t("overview.title")}
                      </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed m-0 text-sm sm:text-base lg:text-lg">
                      {t("overview.content")}
                    </p>
                  </CardContent>
                </Card>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};