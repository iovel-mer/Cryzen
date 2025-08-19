'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../../components/Header/Header";
import { ArrowRight, Home } from "lucide-react";

const PrivacyPage = () => {
  const t = useTranslations("Privacy");

  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] pointer-events-none"></div>

        {/* Modern Effects */}
        <div className="hidden sm:block absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-emerald-500/15 to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-violet-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Particles - Hidden on small screens */}
        <div className="hidden sm:block absolute top-40 left-40 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-60 right-60 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="hidden lg:block absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>

        {/* Back to Home Button */}
        <div className="px-3 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
          <Link
            href="/"
            className='inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl sm:rounded-4xl border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 mb-6 sm:mb-8'
          >
            <Home className='h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300 text-emerald-300' />
            <span className="sm:block xs:inline">{t('backToHome')}</span>
           
            <ArrowRight className='h-4 w-4 sm:h-5 sm:w-5 ml-2 sm:ml-3 rotate-180 group-hover:scale-110 transition-transform duration-300 text-emerald-300' />
          </Link>
        </div>

        <div className="relative z-10 px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-5xl mx-auto">

            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-emerald-200 to-violet-200 bg-clip-text text-transparent tracking-wide drop-shadow-lg leading-tight">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {t("description")}
              </p>
              <div className="mt-4 sm:mt-6 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full text-emerald-300 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/20">
                {t("lastUpdated")}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1;
                return (
                  <div
                    key={section}
                    className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-slate-900/70 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-emerald-500/10"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-lg shadow-lg shadow-emerald-500/30">
                      {section}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

                    <div className="relative z-10 pr-12 sm:pr-16">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 group-hover:from-emerald-300 group-hover:to-violet-300 transition-all duration-300 tracking-wide leading-tight">
                        {t(`section${section}.title`)}
                      </h2>

                      <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>

                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm border border-emerald-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                          <ul className="space-y-2 sm:space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;