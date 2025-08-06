"use client";

import { useTranslations } from "next-intl";
import { Header } from "../../components/Header/Header";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Shield, TrendingUp, Lightbulb } from "lucide-react";

export default function DocumentationPage() {
  const t = useTranslations("docs");

  return (
    <>
      <Header />
      <main className="min-h-screen relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white py-12 px-6 md:px-20 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        {/* Modern Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,69,244,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-40 left-40 w-3 h-3 bg-green-700 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-60 right-60 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10">
        <Link 
              href="/" 
              className='inline-flex items-center px-6 py-3 mb-14 bg-gray-900/60 backdrop-blur-sm rounded-full border border-green-700/30 hover:bg-gray-800/60 hover:border-green-700/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
            >
              <Home className='h-4 w-4 mr-2 text-green-700 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('backToHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-green-700' />
            </Link>

          <div className="max-w-5xl mx-auto mt-8 space-y-12">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 tracking-wide drop-shadow-lg">
                {t("title")}
              </h1>
            </div>

            {/* SECTION TEMPLATE */}
            {[
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-cyan-500 to-blue-600",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("popular.title"),
                colors: "from-purple-500 to-indigo-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-700 rounded-full mt-3"></div>
                      <span><strong className="text-purple-300">Bitcoin (BTC):</strong> {t("popular.bitcoin")}</span>
                    </li>
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("buy.title"),
                colors: "from-emerald-500 to-green-600",
                content: (
                  <ol className="space-y-4 text-gray-300 text-lg">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                        <span>{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: t("tips.title"),
                colors: "from-indigo-500 to-purple-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-3"></div>
                        <span>{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors }, i) => (
              <section
                key={i}
                className="relative bg-gray-900/60 backdrop-blur-xl border border-green-700/20 rounded-3xl p-8 shadow-xl overflow-hidden hover:border-green-700/40 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center shadow-lg`}>
                      {icon}
                    </div>
                    <h2 className="text-3xl font-black mb-0 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-indigo-400 tracking-wide">{title}</h2>
                  </div>
                  {text && <p className="text-gray-300 text-lg leading-relaxed">{text}</p>}
                  {content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

