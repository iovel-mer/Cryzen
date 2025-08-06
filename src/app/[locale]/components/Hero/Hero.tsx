"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Bitcoin, Activity, Shield, Rocket, Play, ChevronRight, TrendingUp, Users, DollarSign, Crown, Star, Sparkles, Database } from "lucide-react"

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
    <section className="min-h-screen bg-slate-950 relative text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-bounce opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8">
           

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">{t("nextGen")}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 animate-pulse drop-shadow-2xl">{t("trading")}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-400 drop-shadow-lg">{t("platform")}</span>
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-lg font-mono">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-emerald-400/40 rounded-full">
                    <Sparkles size={20} className="text-emerald-400 animate-pulse" />
                    <span className="text-emerald-300">{t("specs.execution")}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-violet-400/40 rounded-full">
                    <Shield size={20} className="text-violet-400 animate-pulse" />
                    <span className="text-violet-300">{t("specs.uptime")}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-teal-400/40 rounded-full">
                    <Star size={20} className="text-teal-400 animate-pulse" />
                    <span className="text-teal-300">{t("specs.grade")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={`/${locale}/login`}>
                <Button className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold 
                  bg-slate-800/70 backdrop-blur-sm text-white border border-emerald-400/50 shadow-2xl shadow-emerald-500/30
                  hover:bg-slate-700/70 hover:border-emerald-400/70 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-110
                  transition-all duration-500 ease-out cursor-pointer">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <Database size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">{t("startTrading")}</span>
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-green-400/30 rounded-3xl p-6 text-center hover:border-green-400/60 hover:bg-green-900/20 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <DollarSign size={28} className="text-green-400 animate-pulse" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">$2.4T</div>
                  <div className="text-xs text-green-300 uppercase tracking-widest font-bold">{t("stats.volume")}</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-violet-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-6 text-center hover:border-emerald-400/60 hover:bg-emerald-900/20 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <Users size={28} className="text-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-300 mb-2">18.7M</div>
                  <div className="text-xs text-emerald-300 uppercase tracking-widest font-bold">{t("stats.traders")}</div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-teal-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-violet-400/30 rounded-3xl p-6 text-center hover:border-violet-400/60 hover:bg-violet-900/20 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp size={28} className="text-violet-400 animate-pulse" />
                  </div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-300 mb-2">0.03%</div>
                  <div className="text-xs text-violet-300 uppercase tracking-widest font-bold">{t("stats.fees")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Terminal */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 "></div>
              <Card className="relative mb-58 bg-slate-900/80 backdrop-blur-2xl border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 rounded-3xl overflow-hidden hover:border-violet-400/50 hover:shadow-violet-500/30 transition-all duration-500">
                <CardHeader className="p-6 border-b border-emerald-400/20 bg-gradient-to-r from-slate-900/60 to-violet-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                        <Activity size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">{t("marketFeed")}</h3>
                        <p className="text-sm text-emerald-300 font-mono uppercase tracking-wider">{t("Advanced")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-400 text-sm font-black uppercase tracking-widest">{t("live")}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 border-4 border-emerald-200/20 border-t-emerald-400 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-violet-400 rounded-full animate-spin animation-delay-75"></div>
                        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-teal-400 rounded-full animate-spin animation-delay-150"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="text-white font-black text-xl">{t("loading.title")}</h4>
                        <p className="text-emerald-300 text-sm font-mono">{t("loading.sub")}</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-20">
                      <div className="w-16 h-16 bg-red-500/20 border border-red-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h4 className="text-red-400 font-black mb-2">{t("error.title")}</h4>
                      <p className="text-gray-400 text-sm font-mono">{t("error.sub")}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={coin.symbol} className="group">
                          <div className="relative overflow-hidden bg-slate-900/40 hover:bg-slate-900/60 border border-emerald-400/20 hover:border-violet-400/40 rounded-2xl p-5 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-violet-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-emerald-400/30 rounded-2xl flex items-center justify-center group-hover:border-violet-400/50 group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                                    <img
                                      src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                                      alt={`${coin.symbol} logo`}
                                      className="w-10 h-10"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (fallback) fallback.style.display = 'block';
                                      }}
                                    />
                                    <Bitcoin size={28} className="text-emerald-400 hidden" />
                                  </div>
                                </div>
                                <div>
                                  <div className="text-white font-black text-2xl tracking-wide">{coin.symbol}</div>
                                  <div className="text-emerald-300 text-sm font-mono uppercase tracking-wider">{t("USD")}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-black text-3xl mb-2 font-mono">{formatPrice(coin.price)}</div>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-sm ${
                                  coin.change >= 0
                                    ? "text-green-300 bg-green-500/20 border-green-400/30 shadow-lg shadow-green-500/20"
                                    : "text-red-300 bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20"
                                }`}>
                                  <TrendingUp size={16} className={`${coin.change >= 0 ? "animate-pulse" : "rotate-180 animate-pulse"}`} />
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

                <CardFooter className="p-6 border-t border-emerald-400/20 bg-gradient-to-r from-slate-900/80 to-violet-900/20">
                  <div className="flex justify-between items-center w-full text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                      <span className="text-emerald-300">{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity size={16} className="text-violet-400 animate-pulse" />
                      <span className="text-violet-300">{t("volume")}: {marketData[0]?.volume || "$2.4T"}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}