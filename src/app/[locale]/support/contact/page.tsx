"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Clock, Home, ArrowRight } from "lucide-react";
import { Header } from "../../components/Header/Header";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return formData.name.trim() !== "" && 
           formData.email.trim() !== "" && 
           formData.subject.trim() !== "" && 
           formData.message.trim() !== "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }
   
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      hours: t("general.hours"),
      gradient: "from-green-700 via-indigo-500 to-cyan-600",
      bgGlow: "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      hours: t("technical.hours"),
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGlow: "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20",
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      hours: t("partnership.hours"),
      gradient: "from-emerald-400 via-green-500 to-emerald-600",
      bgGlow: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
    },
  ];

  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
       
        {/* Back to Home Button */}
        <div className='px-3 sm:px-6 lg:px-10 mb-12 sm:mb-16 lg:mb-20'>
          <Link
            href="/"
            className='inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-green-700/30 hover:bg-gray-800/60 hover:border-green-700/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
          >
            <Home className='h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-green-300' />
            <span className="sm:block">{t('backToHome')}</span>
            
            <ArrowRight className='h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-green-300' />
          </Link>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight tracking-wide drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{t("subtitle")}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {/* Contact Options */}
            <div className="space-y-6 sm:space-y-8">
              {contactOptions.map((item, index) => (
                <Card key={index} className="group relative bg-gray-900/60 backdrop-blur-xl border border-green-700/20 hover:border-green-700/40 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-purple-500/10">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl`} />
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${item.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>

                  <CardHeader className="relative z-10 p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl lg:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 tracking-wide">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <span className="leading-tight">{item.title}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base lg:text-lg">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-2 sm:space-y-3 text-sm sm:text-base p-4 sm:p-6 pt-0">
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-2 sm:gap-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-700" /> {item.hours}
                    </p>
                  </CardContent>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-2xl sm:rounded-b-3xl`} />
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="h-fit shadow-xl border border-green-700/20 bg-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl"></div>
              
              <CardHeader className="relative z-10 pb-4 sm:pb-6 p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-indigo-400 font-black tracking-wide">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-2 sm:gap-3">
                    <Label htmlFor="name" className="text-purple-200 font-semibold text-sm sm:text-base tracking-wide">{t("form.name")}</Label>
                    <Input
                      className="text-white bg-gray-800/50 border border-green-700/30 focus:border-green-700/60 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-2 sm:gap-3">
                    <Label htmlFor="email" className="text-purple-200 font-semibold text-sm sm:text-base tracking-wide">{t("form.email")}</Label>
                    <Input
                      className="text-white bg-gray-800/50 border border-green-700/30 focus:border-green-700/60 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2 sm:gap-3">
                    <Label htmlFor="subject" className="text-purple-200 font-semibold text-sm sm:text-base tracking-wide">{t("form.subject")}</Label>
                    <Select name="subject" value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="text-white bg-gray-800/50 border border-green-700/30 focus:border-green-700/60 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm" id="subject">
                        <SelectValue placeholder={t("form.placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800/90 border border-green-700/30 rounded-lg sm:rounded-xl backdrop-blur-xl">
                        <SelectItem value="general" className="text-white hover:bg-purple-500/20 text-sm sm:text-base">
                          {t("form.options.general")}
                        </SelectItem>
                        <SelectItem value="technical" className="text-white hover:bg-purple-500/20 text-sm sm:text-base">
                          {t("form.options.technical")}
                        </SelectItem>
                        <SelectItem value="billing" className="text-white hover:bg-purple-500/20 text-sm sm:text-base">
                          {t("form.options.billing")}
                        </SelectItem>
                        <SelectItem value="partnership" className="text-white hover:bg-purple-500/20 text-sm sm:text-base">
                          {t("form.options.partnership")}
                        </SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-purple-500/20 text-sm sm:text-base">
                          {t("form.options.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2 sm:gap-3">
                    <Label htmlFor="message" className="text-purple-200 font-semibold text-sm sm:text-base tracking-wide">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={t("form.placeholderMessage")}
                      className="min-h-[120px] sm:min-h-[140px] text-white bg-gray-800/50 border border-green-700/30 focus:border-green-700/60 rounded-lg sm:rounded-xl text-sm sm:text-base backdrop-blur-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`w-full text-base sm:text-lg font-bold transition-all duration-300 shadow-lg rounded-lg sm:rounded-xl h-12 sm:h-14 tracking-wide ${
                      isFormValid() 
                        ? 'bg-black text-white cursor-pointer hover:bg-gray-800' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    {t("form.button")}
                  </Button>

                 
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};