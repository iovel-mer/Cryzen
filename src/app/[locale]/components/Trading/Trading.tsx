"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle, Activity, Shield, Sparkles, Banknote, MessageSquare, Globe } from "lucide-react"


export const Trading: React.FC = () => {
  const t = useTranslations("trade")
 

  const featureIcons = [
    Activity,
    Shield,
    Sparkles,
    Banknote,
    MessageSquare,
    Globe
  ]

  const features = [
    {
      icon: featureIcons[0],
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      gradient: "from-emerald-400 to-teal-500",
      glow: "shadow-emerald-500/50"
    },
    {
      icon: featureIcons[1],
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-violet-400 to-purple-500",
      glow: "shadow-violet-500/50"
    },
    {
      icon: featureIcons[2],
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      gradient: "from-teal-400 to-emerald-500",
      glow: "shadow-teal-500/50"
    },
    {
      icon: featureIcons[3],
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      gradient: "from-green-400 to-emerald-500",
      glow: "shadow-green-500/50"
    },
    {
      icon: featureIcons[4],
      title: t("features.support.title"),
      description: t("features.support.description"),
      gradient: "from-violet-400 to-indigo-500",
      glow: "shadow-violet-500/50"
    },
    {
      icon: featureIcons[5],
      title: t("features.access.title"),
      description: t("features.access.description"),
      gradient: "from-emerald-400 to-violet-500",
      glow: "shadow-emerald-500/50"
    }
  ]

  return (
    <section className="relative py-16 px-4 mx-auto overflow-hidden min-h-screen bg-slate-950">
      {/* Consistent Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-conic from-emerald-500 via-violet-500 to-teal-500 rounded-full blur-3xl opacity-15 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-conic from-teal-500 via-emerald-500 to-violet-500 rounded-full blur-3xl opacity-15 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Modern Floating Elements */}
      <div className="absolute top-16 left-16 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-48 right-24 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-teal-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-48 right-48 w-2 h-2 bg-emerald-300 rounded-full animate-bounce opacity-70" style={{animationDelay: '1.5s'}}></div>
      
      <div className="text-center relative z-10 max-w-6xl mx-auto">
        {/* Modern Badge */}
        <div className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/15 to-violet-500/15 backdrop-blur-xl border border-emerald-400/30 rounded-full px-8 py-4 text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
          <CheckCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
          <span className="text-gray-100">{t("badge")}</span>
        </div>

        {/* Modern Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
          <span className="text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {t("title.line1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-teal-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-pulse">
            {t("title.line2")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto font-normal leading-relaxed">
          {t("description")}
        </p>

        {/* Modern Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-2xl p-8 rounded-2xl border border-emerald-400/20 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 overflow-hidden transform hover:rotate-1"
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.glow} group-hover:shadow-2xl group-hover:${feature.glow} transition-all duration-300 transform group-hover:-rotate-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors font-sans tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Modern Corner Effects */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-emerald-400/60 opacity-40 group-hover:opacity-80 transition-opacity transform group-hover:scale-125 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-emerald-400/60 opacity-40 group-hover:opacity-80 transition-opacity transform group-hover:scale-125 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-emerald-400/60 opacity-40 group-hover:opacity-80 transition-opacity transform group-hover:scale-125 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-emerald-400/60 opacity-40 group-hover:opacity-80 transition-opacity transform group-hover:scale-125 rounded-br-lg" />
                
                {/* Level indicator */}
                <div className="absolute top-4 right-4 text-xs font-semibold text-emerald-400/60 opacity-40 group-hover:opacity-80 transition-opacity bg-emerald-500/10 px-2 py-1 rounded-lg">
                  LV.{index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}