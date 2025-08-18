"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { LogIn, UserPlus, Menu, X, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useLocale, useTranslations } from "next-intl"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Header")

  return (
    <header className="container mx-auto bg-slate-950/95 backdrop-blur-2xl sticky top-0 z-50 border-b border-emerald-400/30">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
      
      <div className="relative container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href={`/${locale}`} className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110 border border-emerald-400/40">
                  <Sparkles size={24} className="text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-violet-600 rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-200 to-violet-200 bg-clip-text text-transparent">
                  Cryzen
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href={`/${locale}/login`}>
              <Button className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
                bg-slate-900/60 backdrop-blur-sm text-white border border-emerald-400/40 shadow-lg
                hover:bg-slate-800/60 hover:border-emerald-400/60 hover:shadow-xl hover:scale-105
                transition-all duration-300 ease-out cursor-pointer">
                
              
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/25 to-violet-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <LogIn size={16} className="relative z-10" />
                <span className="relative z-10">{t("signIn")}</span>
              </Button>
            </Link>
            
            <Link href={`/${locale}/register`}>
              <Button className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold 
                bg-slate-900/60 backdrop-blur-sm text-white border border-emerald-400/40 shadow-lg
                hover:bg-slate-800/60 hover:border-emerald-400/60 hover:shadow-xl hover:scale-105
                transition-all duration-300 ease-out cursor-pointer">
                
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/25 to-violet-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <UserPlus size={16} className="relative z-10" />
                <span className="relative z-10">{t("getStarted")}</span>
              </Button>
            </Link>

            <div className="ml-4 pl-4 border-l border-emerald-400/40">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-200"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-4 p-6 bg-slate-950/85 backdrop-blur-xl rounded-2xl border border-emerald-400/30 shadow-2xl">
            <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)} className="block">
              <Button className="group relative overflow-hidden flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold w-full
                bg-gradient-to-r from-emerald-600 to-violet-600 text-white border-0 shadow-lg shadow-emerald-500/30
                hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-[1.02]
                transition-all duration-300 ease-out cursor-pointer">
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <LogIn size={16} className="relative z-10" />
                <span className="relative z-10">{t("signIn")}</span>
              </Button>
            </Link>
            
            <Link href={`/${locale}/register`} onClick={() => setIsMenuOpen(false)} className="block">
              <Button className="group relative overflow-hidden flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold w-full
                bg-slate-900/60 backdrop-blur-sm text-white border border-emerald-400/40 shadow-lg
                hover:bg-slate-800/60 hover:border-emerald-400/60 hover:shadow-xl hover:scale-[1.02]
                transition-all duration-300 ease-out cursor-pointer">
                
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/25 to-violet-600/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                
                <UserPlus size={16} className="relative z-10" />
                <span className="relative z-10">{t("getStarted")}</span>
              </Button>
            </Link>
            
            <div className="pt-4 border-t border-emerald-400/30">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}