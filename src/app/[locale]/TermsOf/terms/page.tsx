'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";

import { ArrowRight, Home } from "lucide-react";
import { Header } from "../../components/Header/Header";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen bg-slate-950 relative text-white px-6 py-20 ">
        {/* Background Grid and Particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>

          {/* Floating Particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-bounce opacity-40"></div>
        </div>
          <div className="p-10 mb-10">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400" />
              {t("backToHome")}
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400" />
            </Link>
          </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full bg-slate-900/60 backdrop-blur-xl border border-emerald-400/30 rounded-3xl shadow-xl shadow-emerald-500/10 p-8 sm:p-12">
          {/* Navigation Link */}

          {/* Title */}
          <h1 className="text-5xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-violet-200 tracking-wide drop-shadow-lg">
            {t("title")}
          </h1>

          {/* Terms Sections */}
          <section className="space-y-10 text-sm sm:text-base leading-relaxed">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/40 backdrop-blur-xl border border-emerald-400/20 rounded-2xl hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-4 tracking-wide">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {t(`section${index + 1}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
