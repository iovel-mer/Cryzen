"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import type { LoginCredentials } from "@/app/api/types/auth"
import { postLogin } from "@/app/api/auth/postLogin"
import { useCredentials } from "@/hooks/use-credentials"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useLocale, useTranslations } from "next-intl"

export default function LoginPage() {
  const { storeCredentials } = useCredentials()
  const router = useRouter()
  const t = useTranslations("login")
  const locale = useLocale()
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    twoFactorCode: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const credentials: LoginCredentials = {
      emailOrUsername: formData.emailOrUsername,
      password: formData.password,
      ...(showTwoFactor && { twoFactorCode: formData.twoFactorCode }),
      ...(formData.rememberMe && { rememberMe: formData.rememberMe }),
    }

    const response = await postLogin(credentials)

    if (!response.success) {
      setError(response.message || "Login failed")
      setIsLoading(false)
      return
    }

    storeCredentials(credentials)
    window.location.href = "/dashboard"
  }

  const benefits = [
    t("benefits.pairAccess"),
    t("benefits.advancedTools"),
    t("benefits.secureWallet"),
    t("benefits.customerSupport"),
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Modern Effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-emerald-500/15 via-lime-500/15 to-green-500/15 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-lime-500/10 via-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-lime-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }} />

      <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-800/60 to-slate-900/60 backdrop-blur-xl border border-emerald-400/30 relative z-10">
        {/* Left Side - Login Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <Link href={`/${locale}`} className="inline-flex items-center text-white hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2 text-white" />
            {t("backToHome")}
          </Link>
          <Card className="w-full bg-gray-800/50 backdrop-blur-sm border border-emerald-400/30 text-white shadow-xl shadow-emerald-500/10 rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-black text-white tracking-wide">{t("signIn")}</CardTitle>
              <CardDescription className="text-gray-300">{t("welcomeBack")}</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="p-3 mb-4 bg-red-500/20 border border-red-400/50 rounded-xl shadow-lg shadow-red-500/20">
                  <p className="text-red-300 text-sm font-medium">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="emailOrUsername" className="text-gray-300 font-medium tracking-wide text-sm">
                    {t("emailOrUsername")}
                  </Label>
                  <Input
                    id="emailOrUsername"
                    name="emailOrUsername"
                    type="text"
                    placeholder={t("placemail")}
                    value={formData.emailOrUsername}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-gray-800/50 border border-emerald-400/30 text-white placeholder:text-gray-500 focus:border-emerald-400 focus:ring-emerald-400/20 backdrop-blur-sm rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300 font-medium tracking-wide text-sm">
                    {t("password")}
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={t("placepass")}
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-gray-800/50 border border-emerald-400/30 text-white placeholder:text-gray-500 focus:border-emerald-400 focus:ring-emerald-400/20 backdrop-blur-sm rounded-xl"
                    required
                  />
                </div>
                {showTwoFactor && (
                  <div className="space-y-2">
                    <Label htmlFor="twoFactorCode" className="text-gray-300 font-medium tracking-wide text-sm">
                      {t("twoFactorCode")}
                    </Label>
                    <Input
                      id="twoFactorCode"
                      name="twoFactorCode"
                      type="text"
                      placeholder="Enter 2FA code"
                      value={formData.twoFactorCode}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="bg-gray-800/50 border border-emerald-400/30 text-white placeholder:text-gray-500 focus:border-emerald-400 focus:ring-emerald-400/20 backdrop-blur-sm rounded-xl"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-400 hover:from-emerald-600 hover:to-lime-600 text-white font-bold py-3 tracking-wide transition-all duration-200 transform hover:scale-105 rounded-xl shadow-lg shadow-emerald-500/30"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t("signingIn")}
                    </div>
                  ) : (
                    t("signIn")
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center flex flex-col">
              <p className="text-gray-300">
                {t("dontHaveAccount")}{" "}
                <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {t("signUp")}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Right Side - Trading Benefits */}
        <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-emerald-900/10 to-lime-900/10 backdrop-blur-sm flex flex-col justify-center border-l border-emerald-400/30 lg:border-t-0 border-t">
          <h2 className="text-3xl font-black text-white mb-8 tracking-wide">{t("startTrading")}</h2>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-emerald-400/30">
            <div className="text-center">
              <p className="text-emerald-300 text-sm mb-1 font-medium tracking-wide">{t("totalVolume")}</p>
              <p className="text-2xl font-black text-emerald-400 drop-shadow-lg">$7.8B+</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-300 text-sm mb-1 font-medium tracking-wide">{t("activeTraders")}</p>
              <p className="text-2xl font-black text-emerald-400 drop-shadow-lg">900K+</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-300 text-sm mb-1 font-medium tracking-wide">{t("countries")}</p>
              <p className="text-2xl font-black text-emerald-400 drop-shadow-lg">195+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
