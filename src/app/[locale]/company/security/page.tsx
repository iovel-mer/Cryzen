'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Lock,
  Banknote,
  Gem,
  Lightbulb,
  FileText,
  Fingerprint,
  Scale,
  Landmark,
  Wallet,
  ClipboardList,
  Eye,
  ArrowRight,
  CheckCircle,
  Home,
  Shield,
  Bitcoin,
} from 'lucide-react';
import { Header } from '../../components/Header/Header';
import { useTranslations } from 'next-intl';


export default function SecurityPage() {
  const t = useTranslations('security');  

  return (
    <>
      <Header />
      <main className='container mx-auto pt-10 min-h-screen bg-slate-950 text-white relative overflow-hidden'>
        {/* Consistent Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-emerald-900/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-30%,rgba(16,185,129,0.15),transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
        </div>

        {/* Modern Effects */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-20 -right-20 w-72 h-72 bg-emerald-400/15 rounded-full blur-2xl animate-pulse' />
          <div className='absolute bottom-10 left-1/3 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000' />
          <div className='absolute top-1/3 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-2000' />
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className='relative z-10'>
          <section className='container mx-auto text-center pt-20 pb-16 px-4 md:px-6'>
            <div className='animate-fade-in-up'>
              <div className='flex justify-start mb-8 ml-8'>
                <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-slate-900/60 backdrop-blur-sm rounded-full border border-emerald-400/30 hover:bg-slate-800/60 hover:border-emerald-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-emerald-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400' />
                </Link>
              </div>

              <div className='inline-flex items-center px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-full border border-emerald-400/40 mb-8 shadow-lg shadow-emerald-500/20'>
                <Shield className='h-5 w-5 text-emerald-400 mr-2' />
                <span className='text-sm font-semibold text-emerald-200 tracking-wide'>{t('enhancedTrustVerification')}</span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-violet-200 leading-tight drop-shadow-lg'>
                {t('yourDigitalSafetyReimagined')}
              </h1>

              <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
                {t('securityDescription')}
              </p>

              <div className='flex flex-wrap justify-center gap-6 text-sm'>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-emerald-400 mr-2' />
                  <span className='text-emerald-200'>{t('endToEndEncryption')}</span>
                </div>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-emerald-400 mr-2' />
                  <span className='text-emerald-200'>{t('multiLayerAccess')}</span>
                </div>
                <div className='flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-full'>
                  <CheckCircle className='h-4 w-4 text-emerald-400 mr-2' />
                  <span className='text-emerald-200'>{t('realTimeAudits')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Security Features Grid */}
          <section className='container mx-auto px-4 md:px-6 mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              
              {/* Advanced Encryption */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 tracking-wide">
                    Advanced Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    Military-grade AES-256 encryption protects all your transactions and personal data with unbreakable security protocols.
                  </p>
                </CardContent>
              </Card>

              {/* Multi-Factor Authentication */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                    <Fingerprint className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-teal-400 tracking-wide">
                    Multi-Factor Auth
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    Advanced biometric authentication and 2FA protocols ensure only you can access your crypto assets and trading account.
                  </p>
                </CardContent>
              </Card>

              {/* Cold Storage */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-teal-500/30">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 tracking-wide">
                    Cold Storage
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    98% of crypto assets stored offline in bank-grade cold storage vaults, completely isolated from internet threats.
                  </p>
                </CardContent>
              </Card>

              {/* Real-time Monitoring */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 tracking-wide">
                    24/7 Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    AI-powered threat detection monitors all activities 24/7, instantly identifying and neutralizing suspicious behavior.
                  </p>
                </CardContent>
              </Card>

              {/* Regulatory Compliance */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 tracking-wide">
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    Fully regulated and compliant with global financial standards including SOC 2, ISO 27001, and PCI DSS certifications.
                  </p>
                </CardContent>
              </Card>

              {/* Insurance Protection */}
              <Card className="group relative bg-slate-900/60 backdrop-blur-xl border border-emerald-400/20 text-white shadow-xl shadow-emerald-500/10 rounded-2xl overflow-hidden hover:border-violet-400/40 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 tracking-wide">
                    Insurance Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    $500M+ insurance coverage protects user funds against theft, hacking, and operational failures with Lloyd's of London.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </>
  );
}