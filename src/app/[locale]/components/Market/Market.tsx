"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getMarketData, type MarketData } from "@/app/api/market/actions"
import { TrendingUp, TrendingDown, Activity, RefreshCw, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const Market: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const t = useTranslations("Market")

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await getMarketData()
      if (result.success) {
        setMarketData(result.data as any)
        setError(null)
      } else {
        setError(result.error || t("errorGeneric"))
      }
    } catch (err) {
      setError(t("errorFetch"))
      console.error("Market data fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const fractionDigits = price >= 1000 ? 2 : price >= 1 ? 4 : 6
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : ""
    return `${sign}${change.toFixed(2)}%`
  }

  const handleImageError = (symbol: string) => {
    setImageErrors((prev) => new Set(prev).add(symbol))
  }

  const CryptoLogo = ({ coin, size = 48 }: { coin: MarketData; size?: number }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-emerald-500 via-violet-500 to-teal-500 text-white font-bold shadow-2xl border-2 border-emerald-400/50 rounded-xl"
          style={{ width: size, height: size }}
        >
          <span className="text-xs font-semibold">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div 
        className="relative overflow-hidden shadow-2xl rounded-xl border border-emerald-400/30"
        style={{ width: size, height: size }}
      >
        <Image
          src={logoSrc}
          width={size}
          height={size}
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover h-full rounded-xl"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="py-20 bg-slate-950 min-h-screen relative overflow-hidden">
      {/* Consistent Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
      </div>

      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-conic from-emerald-500 via-violet-500 to-teal-500 rounded-full blur-3xl opacity-15 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-conic from-teal-500 via-emerald-500 to-violet-500 rounded-full blur-3xl opacity-15 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-2 animate-pulse"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/15 to-violet-500/15 backdrop-blur-xl border border-emerald-400/30 rounded-full text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-500/20 mb-8">
            <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>

          <h3 className="text-5xl text-white md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
            {t("title")}
          </h3>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-emerald-500 border-t-transparent animate-spin rounded-2xl shadow-lg shadow-emerald-500/30"></div>
              <RefreshCw className="w-8 h-8 text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-8 text-emerald-200 text-xl font-semibold tracking-wide">{t("loading")}</p>
          </div>
        ) : error ? (
          <div className="text-center py-32">
            <div className="bg-gradient-to-br from-red-900/50 to-slate-900/50 backdrop-blur-xl border border-red-500/50 p-12 max-w-lg mx-auto shadow-2xl shadow-red-500/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/30 rounded-2xl">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <p className="text-red-300 text-lg font-semibold tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative bg-slate-800/60 hover:bg-slate-800/80 border border-emerald-400/20 hover:border-violet-400/50 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden p-6 shadow-xl hover:shadow-emerald-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <CryptoLogo coin={coin} size={56} />
                      <div>
                        <h4 className="font-bold text-lg text-gray-100 tracking-wide">{coin.name}</h4>
                        <p className="text-emerald-400/80 text-sm font-medium tracking-wide">{coin.symbol}</p>
                      </div>
                    </div>

                    {/* Updated Percent Text - Clean and Right Aligned */}
                    <div className="text-right">
                      <span className={`flex items-center justify-end gap-1 text-xs font-semibold ${
                        coin.change >= 0 ? "text-emerald-300" : "text-red-300"
                      }`}>
                        {coin.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {formatChange(coin.change)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-4xl font-black text-white mb-2 tracking-tight drop-shadow-sm">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-gray-400 text-sm font-medium tracking-wide flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t("currentPrice")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium tracking-wide">{t("movement")}</span>
                      <span className={`font-bold text-lg ${coin.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-700/50 h-2 rounded-full relative overflow-hidden">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          coin.change >= 0 
                            ? 'bg-emerald-400 shadow-lg shadow-emerald-400/30' 
                            : 'bg-gradient-to-r from-red-400 to-rose-500 shadow-lg shadow-red-400/30'
                        }`}
                        style={{ width: `${Math.min(Math.abs(coin.change) * 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-emerald-400/40 opacity-40 group-hover:opacity-80 transition-opacity rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-violet-400/40 opacity-40 group-hover:opacity-80 transition-opacity rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-teal-400/40 opacity-40 group-hover:opacity-80 transition-opacity rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-emerald-400/40 opacity-40 group-hover:opacity-80 transition-opacity rounded-br-lg"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-violet-500 to-teal-500 opacity-60 shadow-lg shadow-emerald-500/30"></div>
    </section>
  )
}