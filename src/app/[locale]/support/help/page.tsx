"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Home,
  ArrowRight,
} from "lucide-react";


export default function HelpPage(){
  const t = useTranslations("help");

  const helpCategories = [
    {
      icon: TrendingUp,
      title: t("categories.trading.title"),
      description: t("categories.trading.description"),
      gradient: "from-green-700 via-indigo-500 to-cyan-600",
      bgGlow: "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
      items: [
        t("categories.trading.items.0"),
        t("categories.trading.items.1"),
        t("categories.trading.items.2"),
      ],
    },
    {
      icon: Shield,
      title: t("categories.security.title"),
      description: t("categories.security.description"),
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGlow: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      items: [
        t("categories.security.items.0"),
        t("categories.security.items.1"),
        t("categories.security.items.2"),
      ],
    },
    {
      icon: Users,
      title: t("categories.account.title"),
      description: t("categories.account.description"),
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGlow: "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20",
      items: [
        t("categories.account.items.0"),
        t("categories.account.items.1"),
        t("categories.account.items.2"),
      ],
    },
    {
      icon: Zap,
      title: t("categories.features.title"),
      description: t("categories.features.description"),
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
      bgGlow: "bg-gradient-to-br from-indigo-500/20 to-pink-500/20",
      items: [
        t("categories.features.items.0"),
        t("categories.features.items.1"),
        t("categories.features.items.2"),
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className=" mx-auto pt-30 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative px-4 py-16 sm:px-6 lg:px-8  min-h-screen overflow-hidden text-white">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        {/* Modern Background Orbs */}
        <div className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-700 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

            <div className='flex justify-start mb-12'>
              <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3  rounded-full border  transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-green-300' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-green-300' />
                </Link>
            </div>
       
        <div className="relative z-10 max-w-7xl mx-auto">
         
          <section className="text-center mb-24">
            {/* Back to Home Link */}

            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 backdrop-blur-md rounded-full border border-green-700/40 mb-8 shadow-lg shadow-purple-500/20">
              <Sparkles className="w-5 h-5 mr-2 text-green-700 animate-pulse" />
              <span className="text-purple-200 font-semibold tracking-wide">{t('helpCenter')}</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 leading-tight tracking-wide drop-shadow-lg">
             {t('title')}
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
             {t('subtitle')}
            </p>
          </section>

          {/* Help Categories Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-indigo-400 tracking-wide">{t("browse.title")}</h2>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t("browse.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={index}
                    className="group relative bg-gray-900/60 backdrop-blur-xl border border-green-700/20 hover:border-green-700/40 transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden rounded-3xl shadow-xl shadow-purple-500/10"
                  >
                    {/* Enhanced Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`}
                    />
                    
                    {/* Background Glow Pattern */}
                    <div className={`absolute inset-0 ${category.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{
                          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          maskComposite: 'xor',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          padding: '2px'
                        }}
                      />
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      <div
                        className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                      >
                        <IconComponent className="w-9 h-9 text-white drop-shadow-lg" />
                      </div>
                      <CardTitle className="text-white text-xl font-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 mb-3 tracking-wide">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-base leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0 pb-6">
                        {category.items.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className="text-gray-500 text-sm hover:text-gray-200 transition-colors duration-300 flex items-center gap-3 group/item mb-2"
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </p>
                        ))}
                    </CardContent>
                    
                    {/* Enhanced Bottom Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl shadow-lg`}
                    />
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

