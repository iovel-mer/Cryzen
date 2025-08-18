"use client";

import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="container mx-auto min-h-screen relative bg-slate-950 pt-0 overflow-hidden">
        {/* Consistent Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
        </div>

        {/* Modern Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-emerald-500/15 via-violet-500/15 to-teal-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-teal-500/10 via-emerald-500/10 to-violet-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        {/* HERO SECTION */}
          <div className="p-20">
             <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
                </Link>
          </div>
        <section className="py-10 md:py-10 text-center px-6 md:px-12 max-w-3xl mx-auto relative z-10">

          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-violet-200 mb-6 tracking-wide drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 pb-32 relative z-10 space-y-16">
          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border border-emerald-400/20 rounded-2xl shadow-xl shadow-emerald-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-6 tracking-wide">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("missionText")}</p>
          </div>

          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border border-emerald-400/20 rounded-2xl shadow-xl shadow-emerald-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-6 tracking-wide">
              {t("whoTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("whoText")}</p>
          </div>

          <div className="text-center p-8 bg-slate-900/40 backdrop-blur-xl border border-emerald-400/20 rounded-2xl shadow-xl shadow-emerald-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-6 tracking-wide">
              {t("whyTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("whyText")}</p>
          </div>

          <div className="pt-8 border-t border-emerald-400/30">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-12 text-center tracking-wide">
              {t("guidesTitle")}
            </h2>
            <div className="space-y-8">
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-emerald-400/20 rounded-xl hover:border-violet-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <h3 className="text-lg font-bold text-emerald-200 mb-3 tracking-wide">
                  {t("value1Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value1Text")}</p>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-emerald-400/20 rounded-xl hover:border-violet-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <h3 className="text-lg font-bold text-emerald-200 mb-3 tracking-wide">
                  {t("value2Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value2Text")}</p>
              </div>
              <div className="text-center p-6 bg-slate-900/30 backdrop-blur-xl border border-emerald-400/20 rounded-xl hover:border-violet-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                <h3 className="text-lg font-bold text-emerald-200 mb-3 tracking-wide">
                  {t("value3Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};