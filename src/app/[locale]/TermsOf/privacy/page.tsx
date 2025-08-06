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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

        {/* Modern Effects */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-violet-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Floating Particles */}
        <div className="absolute top-40 left-40 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-60 right-60 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 px-6 py-16">
          <div className="max-w-5xl mx-auto">

            {/* Header Section */}
            <div className="mb-12">
              <Link
                href="/"
                className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 mb-8'
              >
                <Home className='h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300 text-emerald-400' />
                <span>{t('backToHome')}</span>
                <ArrowRight className='h-5 w-5 ml-3 rotate-180 group-hover:scale-110 transition-transform duration-300 text-emerald-400' />
              </Link>

              <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-emerald-200 to-violet-200 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
                  {t("title")}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("description")}
                </p>
                <div className="mt-6 inline-block px-6 py-3 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40 rounded-full text-emerald-300 text-sm font-semibold shadow-lg shadow-emerald-500/20">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1;
                return (
                  <div
                    key={section}
                    className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 rounded-3xl p-10 hover:bg-slate-900/70 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-emerald-500/10"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-emerald-500/30">
                      {section}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 group-hover:from-emerald-300 group-hover:to-violet-300 transition-all duration-300 tracking-wide">
                        {t(`section${section}.title`)}
                      </h2>

                      <p className="text-lg text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>

                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6">
                          <ul className="space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-base leading-relaxed">{item}</span>
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
