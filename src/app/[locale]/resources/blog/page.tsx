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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      {/* Modern Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-violet-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-violet-600/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-40 left-40 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-60 right-60 w-2 h-2 bg-violet-600 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
         <Link 
              href="/" 
              className='inline-flex items-center px-6 py-3 mb-14 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-950/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20'
            >
              <Home className='h-4 w-4 mr-2 text-emerald-500 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('backToHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-500' />
            </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-emerald-500 md:text-5xl lg:text-6xl mb-6 tracking-wide drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 text-violet-200 rounded-full border border-emerald-400/30">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/60 text-violet-200 rounded-full border border-emerald-400/30">
                <User className="w-4 h-4 text-emerald-500" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <article className="prose prose-lg prose-gray max-w-none">
              
              <section id="overview" className="mb-12">
                <Card className="bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:border-emerald-400/40 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-xl shadow-lg shadow-emerald-500/30">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-600 m-0 tracking-wide">
                        {t("overview.title")}
                      </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed m-0 text-lg">
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