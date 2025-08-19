"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Bitcoin, Activity, Shield, Rocket, Play, ChevronRight, TrendingUp, Users, DollarSign, Crown, Star, Sparkles, Database, Zap, Globe, Lock } from "lucide-react"

export const Hero: React.FC = () => {
  const t = useTranslations("hero")
  const locale = useLocale();
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
          setError(null)
        } else {
          setError(result.error || "Failed to load data")
        }
      } catch (err) {
        setError("Failed to load market data")
        console.error("Hero data fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
        }
      } catch (err) {
        console.warn("Failed to update hero data:", err)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className=" mx-auto w-full min-h-screen bg-slate-950 relative text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-slate-950 to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1400px_900px_at_50%_-20%,rgba(16,185,129,0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_80%_80%,rgba(139,69,255,0.08),transparent)]"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] lg:bg-[size:60px_60px] animate-pulse opacity-40"></div>
        
        {/* Enhanced floating particles - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-16 sm:top-20 left-8 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-bounce opacity-60 shadow-lg shadow-emerald-400/50"></div>
        <div className="hidden sm:block absolute top-32 sm:top-40 right-16 sm:right-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-violet-400 rounded-full animate-ping opacity-70 shadow-lg shadow-violet-400/50"></div>
        <div className="hidden sm:block absolute bottom-32 sm:bottom-40 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-pulse opacity-50 shadow-lg shadow-teal-400/50"></div>
        <div className="hidden sm:block absolute top-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-300 rounded-full animate-bounce opacity-40 shadow-lg shadow-emerald-300/50"></div>
        <div className="hidden lg:block absolute top-1/2 left-12 sm:left-16 w-1 h-1 bg-violet-300 rounded-full animate-ping opacity-30"></div>
        <div className="hidden lg:block absolute bottom-16 sm:bottom-20 right-32 sm:right-40 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-teal-300 rounded-full animate-pulse opacity-45"></div>
        
        {/* Flowing light streaks - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent opacity-30"></div>
        <div className="hidden md:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-violet-400/20 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen">
          {/* Enhanced Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm opacity-90">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/20 rounded-full">
                <Shield size={12} className="sm:w-3.5 sm:h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Regulated</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-slate-900/40 backdrop-blur-sm border border-violet-400/20 rounded-full">
                <Users size={12} className="sm:w-3.5 sm:h-3.5 text-violet-400" />
                <span className="text-violet-300 font-medium">10M+ Users</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-slate-900/40 backdrop-blur-sm border border-teal-400/20 rounded-full">
                <Globe size={12} className="sm:w-3.5 sm:h-3.5 text-teal-400" />
                <span className="text-teal-300 font-medium">Global</span>
              </div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-2xl animate-fade-in">
                    {t("nextGen")}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-violet-400 drop-shadow-2xl animate-fade-in-delayed">
                    {t("trading")}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-teal-400 drop-shadow-2xl animate-fade-in-delayed-2">
                    {t("platform")}
                  </span>
                </h1>
                
                {/* Enhanced feature badges */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base font-mono">
                  <div className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-slate-900/60 backdrop-blur-md border border-emerald-400/40 rounded-xl sm:rounded-2xl hover:border-emerald-400/70 hover:bg-slate-900/70 transition-all duration-300">
                    <div className="relative">
                      <Zap size={16} className="sm:w-5 sm:h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    </div>
                    <span className="text-emerald-300 font-semibold">{t("specs.execution")}</span>
                  </div>
                  <div className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-slate-900/60 backdrop-blur-md border border-violet-400/40 rounded-xl sm:rounded-2xl hover:border-violet-400/70 hover:bg-slate-900/70 transition-all duration-300">
                    <div className="relative">
                      <Shield size={16} className="sm:w-5 sm:h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-violet-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    </div>
                    <span className="text-violet-300 font-semibold">{t("specs.uptime")}</span>
                  </div>
                  <div className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-slate-900/60 backdrop-blur-md border border-teal-400/40 rounded-xl sm:rounded-2xl hover:border-teal-400/70 hover:bg-slate-900/70 transition-all duration-300">
                    <div className="relative">
                      <Crown size={16} className="sm:w-5 sm:h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    </div>
                    <span className="text-teal-300 font-semibold">{t("specs.grade")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                {t("description")}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Lock size={14} className="sm:w-4 sm:h-4 text-emerald-400" />
                  <span>Bank-grade security</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Activity size={14} className="sm:w-4 sm:h-4 text-violet-400" />
                  <span>Real-time analytics</span>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
              <Link href={`/${locale}/register`} className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold w-full sm:w-auto
                  bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md text-white 
                  border border-emerald-400/50 shadow-2xl shadow-emerald-500/25
                  hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 hover:-translate-y-1
                  transition-all duration-500 ease-out cursor-pointer min-w-[180px] sm:min-w-[200px]">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-violet-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative">
                    <Rocket size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="relative z-10">{t("startTrading")}</span>
                  <ChevronRight size={16} className="sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Market Terminal */}
          <div className="lg:col-span-5 w-full mt-8 lg:mt-0">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-80"></div>
              
              <Card className="relative bg-slate-900/90 backdrop-blur-2xl border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-violet-400/50 hover:shadow-violet-500/30 transition-all duration-700 transform hover:scale-[1.02]">
                
                {/* Enhanced Header */}
                <CardHeader className="p-4 sm:p-6 lg:p-8 border-b border-emerald-400/20 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-violet-900/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-600 via-emerald-500 to-violet-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/40">
                          <Activity size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-400 rounded-full border-2 border-slate-900 shadow-lg shadow-green-400/50">
                          <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-violet-200">
                          {t("marketFeed")}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3 mt-1">
                          <p className="text-xs sm:text-sm text-emerald-300 font-mono uppercase tracking-wider font-bold">{t("Advanced")}</p>
                          <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                          <p className="text-xs text-gray-400 font-mono">v2.0</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-400 text-xs sm:text-sm font-black uppercase tracking-widest">{t("live")}</span>
                    </div>
                  </div>
                </CardHeader>

                {/* Enhanced Content */}
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24">
                      <div className="relative mb-4 sm:mb-6 lg:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-emerald-200/20 border-t-emerald-400 rounded-full animate-spin shadow-lg shadow-emerald-400/20"></div>
                        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-transparent border-t-violet-400 rounded-full animate-spin animation-delay-75 shadow-lg shadow-violet-400/20"></div>
                        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-transparent border-t-teal-400 rounded-full animate-spin animation-delay-150 shadow-lg shadow-teal-400/20"></div>
                      </div>
                      <div className="text-center space-y-2 sm:space-y-3">
                        <h4 className="text-white font-black text-lg sm:text-xl lg:text-2xl">{t("loading.title")}</h4>
                        <p className="text-emerald-300 text-sm sm:text-base font-mono">{t("loading.sub")}</p>
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-400 rounded-full animate-bounce animation-delay-75"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full animate-bounce animation-delay-150"></div>
                        </div>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-12 sm:py-16 lg:py-24">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-red-500/20 border-2 border-red-400/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-red-400/20">
                        <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h4 className="text-red-400 font-black text-lg sm:text-xl mb-2 sm:mb-3">{t("error.title")}</h4>
                      <p className="text-gray-400 text-sm sm:text-base font-mono">{t("error.sub")}</p>
                    </div>
                  ) : (
                    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                      {marketData.map((coin, index) => (
                        <div key={coin.symbol} className="group">
                          <div className="relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/60 border border-emerald-400/20 hover:border-violet-400/40 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-violet-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                                <div className="relative">
                                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-2 border-emerald-400/30 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:border-violet-400/50 group-hover:shadow-xl group-hover:shadow-emerald-500/20 transition-all duration-500">
                                    <img
                                      src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                                      alt={`${coin.symbol} logo`}
                                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (fallback) fallback.style.display = 'block';
                                      }}
                                    />
                                    <Bitcoin size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400 hidden" />
                                  </div>
                                </div>
                                <div>
                                  <div className="text-white font-black text-xl sm:text-2xl lg:text-3xl tracking-wide mb-1">{coin.symbol}</div>
                                  <div className="text-emerald-300 text-sm sm:text-base font-mono uppercase tracking-wider font-semibold">{t("USD")}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-black text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 font-mono group-hover:text-emerald-200 transition-colors duration-300">
                                  {formatPrice(coin.price)}
                                </div>
                                <div className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold border-2 backdrop-blur-md transition-all duration-300 ${
                                  coin.change >= 0
                                    ? "text-green-300 bg-green-500/20 border-green-400/40 shadow-xl shadow-green-500/20 hover:shadow-green-500/30"
                                    : "text-red-300 bg-red-500/20 border-red-400/40 shadow-xl shadow-red-500/20 hover:shadow-red-500/30"
                                }`}>
                                  <TrendingUp size={14} className={`sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${coin.change >= 0 ? "" : "rotate-180"} group-hover:scale-110 transition-transform duration-300`} />
                                  {coin.change >= 0 ? "+" : ""}
                                  {coin.change.toFixed(2)}%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                {/* Enhanced Footer */}
                <CardFooter className="p-4 sm:p-6 lg:p-8 border-t border-emerald-400/20 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-violet-900/40">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-sm sm:text-base font-mono gap-2 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
                        <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span className="text-emerald-300 font-semibold">{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Activity size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-violet-400 animate-pulse" />
                      <span className="text-violet-300 font-semibold">{t("volume")}: {marketData[0]?.volume || "$2.4T"}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animation-delay-75 {
          animation-delay: 0.075s;
        }
        
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </section>
  )
}