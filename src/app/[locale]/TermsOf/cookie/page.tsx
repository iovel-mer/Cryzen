'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../../components/Header/Header";
import { ArrowRight, Home } from "lucide-react";

export default function CookiePage() {
  const t = useTranslations("Cookie");

  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen pt-15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.05)_2px,transparent_2px)] bg-[size:60px_60px]"></div>

        {/* Background Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-emerald-500/15 via-violet-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-violet-500/10 via-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>

            <div className="p-15">
              <Link
                href="/"
                className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20'
              >
                <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
                {t('backToHome')}
                <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
              </Link>
            </div>
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-6xl mx-auto">

            

              <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-violet-200 mt-8 animate-pulse tracking-wide drop-shadow-lg">
                {t("title")}
              </h1>

              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("description")}
              </p>

            {/* Cookie Content Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">

              {/* Left Column */}
              <div className="space-y-8">

                {/* Section 3 - Network & Security */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-violet-400/20 rounded-3xl p-8 hover:border-violet-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-violet-500/10">
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-400/20 to-emerald-400/20 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400 flex items-center gap-3 tracking-wide">
                      {t("section3.title")}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">{t("section3.text")}</p>
                  </div>
                </div>

                {/* Section 5 - User Consent */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-emerald-500/10">
                  <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center gap-3 tracking-wide">
                      {t("section5.title")}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">{t("section5.text")}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">

                {/* Section 2 - Cookie Types */}
                <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-teal-400/20 rounded-3xl p-8 hover:border-teal-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-teal-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-400 flex items-center gap-3 tracking-wide">
                      {t("section2.title")}
                    </h2>
                    <div className="space-y-4">
                      {t.raw("section2.items").map((item: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm border border-emerald-400/20 rounded-2xl hover:bg-slate-700/40 hover:border-emerald-400/30 transition-all duration-300"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <div
                            className="text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
