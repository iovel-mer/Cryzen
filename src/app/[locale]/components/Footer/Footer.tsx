'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Cpu, Bitcoin, Rocket, Zap, Sparkles } from 'lucide-react';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  const routeMapping = {
    'About Us': `/${locale}/company/about`,
    Security: `/${locale}/company/security`,
    'Help Center': `/${locale}/support/help`,
    'Contact Us': `/${locale}/support/contact`,
    Blog: `/${locale}/resources/blog`,
    Documentation: `/${locale}/resources/documentation`,
    TermsOfService: `/${locale}/TermsOf/terms`,
    PrivacyPolicy: `/${locale}/TermsOf/privacy`,
    CookiePolicy: `/${locale}/TermsOf/cookie`,
  };

  const translationMapping = {
    'About Us': 'aboutUs',
    Security: 'security',
    'Help Center': 'helpCenter',
    'Contact Us': 'contactUs',
    Blog: 'blog',
    Documentation: 'documentation',
    TermsOfService: 'terms.title',
    PrivacyPolicy: 'privacy.title',
    CookiePolicy: 'cookies.title',
  };

  return (
    <div className='relative'>
      {/* Footer */}
      <footer className=' mx-auto py-12 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative text-white overflow-hidden'>
        {/* Modern Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        
        {/* Modern Border Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 animate-pulse shadow-lg shadow-purple-500/30"></div>
        
        {/* Floating Data Points */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '1.5s'}}></div>

        <div className='container mx-auto relative z-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-8'>
            <div className='lg:col-span-2 md:col-span-2 px-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 blur opacity-40 transition duration-300 group-hover:opacity-60 rounded-xl" />
                </div>
                 <div className='flex gap-4 items-center'>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110 border border-emerald-400/40">
                                     <Sparkles size={24} className="text-white" />
                                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                   </div>
                   <span className='text-3xl font-black tracking-wide bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg'>
                    Cryzen
                   </span>
                 </div>
              </div>
              <p className='text-gray-300 mb-6 max-w-sm text-lg leading-relaxed'>
                {tFooter('description')}
              </p>
              
              {/* Modern Lines */}
              <div className="space-y-2 opacity-60">
                <div className="h-px bg-gradient-to-r from-purple-400 to-transparent w-3/4 shadow-sm shadow-purple-400/30"></div>
                <div className="h-px bg-gradient-to-r from-indigo-400 to-transparent w-1/2 shadow-sm shadow-indigo-400/30"></div>
                <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent w-2/3 shadow-sm shadow-cyan-400/30"></div>
              </div>
            </div>

            {[
              {
                title: tFooter('company'),
                links: ['About Us', 'Security'],
                color: 'from-purple-400 to-indigo-400',
                glow: 'shadow-purple-400/30'
              },
              {
                title: tFooter('terms.title'),
                links: ['TermsOfService', 'PrivacyPolicy', 'CookiePolicy'],
                color: 'from-indigo-400 to-cyan-400',
                glow: 'shadow-indigo-400/30'
              },
              {
                title: tFooter('support'),
                links: ['Help Center', 'Contact Us'],
                color: 'from-cyan-400 to-blue-400',
                glow: 'shadow-cyan-400/30'
              },
              {
                title: tFooter('resources'),
                links: ['Blog', 'Documentation'],
                color: 'from-blue-400 to-purple-500',
                glow: 'shadow-blue-400/30'
              },
            ].map((section, index) => (
              <div key={section.title} className='md:col-span-1'>
                <h3 className={`font-bold mb-6 text-lg tracking-wide bg-gradient-to-r ${section.color} bg-clip-text text-transparent drop-shadow-sm`}>
                  {section.title}
                </h3>
                <ul className='space-y-4'>
                  {section.links.map(link => (
                    <li key={link} className="relative group">
                      <Link
                        href={routeMapping[link as keyof typeof routeMapping]}
                        className='text-gray-300 hover:text-white transition-all duration-300 cursor-pointer text-base relative inline-block group-hover:text-purple-400'
                      >
                        <span className="relative z-10">
                          {tFooter(
                            translationMapping[
                              link as keyof typeof translationMapping
                            ]
                          )}
                        </span>
                        {/* Hover glow effect */}
                        {/* Side glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300`}></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Legal Info Section */}
          <div className='relative border border-purple-400/30 rounded-2xl p-8 mb-12 overflow-hidden shadow-xl shadow-purple-500/10 bg-gray-800/20 backdrop-blur-sm'>
            
            {/* Data Stream Animation */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse"></div>
            
            <div className='flex flex-col w-full space-y-6'>
              <p className='text-gray-200 text-base leading-relaxed'>{tFooter('company_info')}</p>
              <p className='text-gray-200 text-base leading-relaxed'>{tFooter('risk_warning')}</p>
              <p className='text-gray-200 text-base leading-relaxed'>{tFooter('execution_notice')}</p>
              <p className='text-gray-200 text-base leading-relaxed'>{tFooter('age_restriction')}</p>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-purple-400/40 opacity-50 rounded-tl-lg"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-indigo-400/40 opacity-50 rounded-tr-lg"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-cyan-400/40 opacity-50 rounded-bl-lg"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-blue-400/40 opacity-50 rounded-br-lg"></div>
          </div>

          {/* Copyright with Modern Style */}
          <div className="text-center relative">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-gray-800/60 to-slate-900/60 backdrop-blur-xl border border-purple-400/30 rounded-full shadow-lg shadow-purple-500/20">
              <span className="text-purple-400 animate-pulse">●</span>
              <span className="text-gray-300 font-medium">
                © {new Date().getFullYear()} Cryzen {tFooter('rights')}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}