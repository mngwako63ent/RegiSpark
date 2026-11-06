import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  Building2, 
  MessageSquare, 
  FileText, 
  Sparkles, 
  Check, 
  HelpCircle,
  TrendingUp,
  FileCheck,
  ArrowUpRight
} from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { REGISPARK_CONFIG } from '../data/config';

interface HomePageProps {
  onNavigate: (page: string, packageId?: string) => void;
  onOpenTracker: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenTracker }) => {
  return (
    <div className="space-y-24 pb-24 bg-white text-slate-900">
      
      {/* 1. ARCHITECTURAL HERO SECTION (Inspired by Image 1 & 2) */}
      <section className="relative overflow-hidden bg-[#101D35] text-white pt-8 pb-20 lg:pt-12 lg:pb-28">
        
        {/* Directional Light Beam Effect (Inspired by Image 1's lamp beam) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 75% 25%, rgba(255, 112, 46, 0.22) 0%, rgba(255, 214, 174, 0.08) 40%, transparent 70%), linear-gradient(125deg, rgba(255, 214, 174, 0.06) 0%, transparent 60%)'
          }}
        />

        {/* Framing Container (Sculpted Island Look Inspired by Image 2) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Bold Editorial Typography & Value Proposition */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Editorial Index / Tagline */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FFD6AE] uppercase">
                  01 — REGISPARK SOUTH AFRICA
                </span>
                <span className="w-8 h-px bg-[#FFD6AE]/40" />
                <span className="text-xs text-slate-400 font-medium tracking-wide">
                  Pty Ltd Company Formation
                </span>
              </div>

              {/* Headline - Dual Typographic Weight (Heavy Sans + Light Contrast inspired by LUMIER DARK) */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] break-words">
                  YOUR COMPANY.<br />
                  <span className="font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FFD6AE]">
                    OFFICIALLY REGISTERED.
                  </span>
                </h1>
                <p className="text-base sm:text-xl font-medium text-[#FF702E] tracking-tight">
                  Without leaving your home.
                </p>
              </div>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Start your entrepreneurial journey with RegiSpark. Register your South African private company (Pty Ltd) directly from your phone, without complicated paperwork or queues at CIPC offices.
              </p>

              {/* Sculpted Action Buttons (Inspired by Image 2's pill CTA with circular arrow) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('apply')}
                  className="group inline-flex items-center justify-between sm:justify-start gap-4 pl-6 pr-2.5 py-2.5 text-sm font-bold text-white bg-[#FF702E] hover:bg-[#F64B29] active:scale-[0.98] rounded-full shadow-xl shadow-[#FF702E]/25 transition-all text-left"
                >
                  <span>Get Started Online</span>
                  <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('packages')}
                  className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 pr-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full transition-all"
                >
                  <span>Explore Packages</span>
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 text-[#FFD6AE]" />
                  </span>
                </button>
              </div>

              {/* Editorial Specs Bar (Directly Inspired by Image 1's bottom attributes: Light Style / Minimalist) */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD6AE] font-semibold block">
                    Turnaround Spec
                  </span>
                  <p className="text-xs text-white font-bold">3–5 Business Days</p>
                  <p className="text-[11px] text-slate-400">Electronic CIPC queue</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD6AE] font-semibold block">
                    Deposit Policy
                  </span>
                  <p className="text-xs text-white font-bold">50% to Initiate</p>
                  <p className="text-[11px] text-slate-400">Balance on COR14.3 release</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD6AE] font-semibold block">
                    Document Delivery
                  </span>
                  <p className="text-xs text-white font-bold">100% Digital PDF</p>
                  <p className="text-[11px] text-slate-400">Direct WhatsApp & email</p>
                </div>
              </div>

            </div>

            {/* Right Column: Sculpted Focal Island (Inspired by Image 2's interior framing) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Outer Sculpted Frame with Hairline Bevel & Shadow */}
                <div className="relative rounded-[2rem] overflow-hidden p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/20 shadow-2xl backdrop-blur-sm">
                  
                  <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/3] lg:aspect-[16/12] bg-[#141E30]">
                    <img
                      src="/src/assets/images/hero_entrepreneur_phone_1793871448249.jpg"
                      alt="Young South African entrepreneur using RegiSpark on smartphone in modern workspace"
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Directional cinematic shadow scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/90 via-[#101D35]/30 to-transparent" />
                    
                    {/* Live CIPC Status Pill Badge inside image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#101D35]/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#FF702E] text-white flex items-center justify-center font-bold text-xs shadow-md">
                            Pty
                          </div>
                          <div>
                            <p className="font-bold text-white text-xs sm:text-sm">
                              Pty Ltd Incorporation
                            </p>
                            <p className="text-[11px] text-[#FFD6AE]">
                              Official COR14.3 Certificate · CIPC
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          100% Digital
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating Micro-Card: Fast Verification */}
                <div className="hidden md:block absolute -top-4 left-2 lg:-left-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 text-slate-900 max-w-[220px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF702E] animate-pulse" />
                    <span>Mobile First</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                    Submit personal & proposed company names in under 5 minutes from your phone.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. TRUST INDICATORS (Sculpted Horizontal Island) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            <div className="flex flex-col items-center p-2">
              <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#FF702E] flex items-center justify-center mb-2.5 shadow-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% Online</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Apply from your phone</p>
            </div>

            <div className="flex flex-col items-center p-2">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">No CIPC Visits</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Zero physical queuing</p>
            </div>

            <div className="flex flex-col items-center p-2">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 shadow-sm">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Simple Uploads</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Only SA ID required</p>
            </div>

            <div className="flex flex-col items-center p-2">
              <div className="w-11 h-11 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-2.5 shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">WhatsApp Help</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Direct chat support</p>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center p-2">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2.5 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Digital Delivery</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">PDFs via WhatsApp & email</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS – PREVIEW (Editorial Numbering inspired by Image 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF702E]">
            02 — THE REGISTRATION PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight">
            How RegiSpark Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We removed administrative friction so you can formalise your business in four clear steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#101D35] text-white p-7 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:scale-[1.02] transition-all shadow-xl">
            <span className="text-3xl font-extrabold text-[#FFD6AE] font-mono">
              01.
            </span>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Choose Your Package</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Select Starter (R999), Plus (R1,499) or Boss (R2,999) based on your compliance, tax number and branding needs.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 text-xs font-bold text-[#FF702E]">
              From R999 ZAR
            </div>
          </div>

          <div className="bg-[#101D35] text-white p-7 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:scale-[1.02] transition-all shadow-xl">
            <span className="text-3xl font-extrabold text-[#FFD6AE] font-mono">
              02.
            </span>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Complete Application</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fill in your personal details, director ID number, and proposed company names in our mobile-friendly form.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 text-xs font-bold text-slate-400">
              Takes ~5 minutes
            </div>
          </div>

          <div className="bg-[#101D35] text-white p-7 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:scale-[1.02] transition-all shadow-xl">
            <span className="text-3xl font-extrabold text-[#FFD6AE] font-mono">
              03.
            </span>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Submit ID & Deposit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Upload a clear photo of your South African ID and pay your 50% deposit securely via PayFast, Instant EFT or e-wallet.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 text-xs font-bold text-[#FFD6AE]">
              POPIA Encrypted
            </div>
          </div>

          <div className="bg-[#101D35] text-white p-7 rounded-3xl border border-white/10 flex flex-col justify-between relative group hover:scale-[1.02] transition-all shadow-xl">
            <span className="text-3xl font-extrabold text-[#FFD6AE] font-mono">
              04.
            </span>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Receive Documents</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                RegiSpark files with CIPC. Once approved, your official COR14.3 certificate & pack are sent to your WhatsApp and email.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 text-xs font-bold text-emerald-400">
              3–5 business days
            </div>
          </div>

        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('how-it-works')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#101D35] hover:text-[#FF702E] transition-colors group"
          >
            <span>See How It Works in Full Detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 4. PACKAGES PREVIEW (Bespoke Cards with Sculpted CTAs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF702E]">
            03 — TRANSPARENT PACKAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight">
            Select Your Registration Package
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No hidden costs. 50% deposit to get started, with balance due only upon final document delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`rounded-[2rem] p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-[#101D35] text-white shadow-2xl ring-2 ring-[#FF702E] scale-[1.02] lg:scale-105 z-10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Badge in Champagne / Orange */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <span className="inline-block whitespace-nowrap px-4 py-1 text-xs font-extrabold tracking-wider uppercase rounded-full bg-[#FF702E] text-white shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Price */}
                  <div className="border-b pb-6 mb-6 border-slate-200/20">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-[#101D35]'}`}>
                        {pkg.name}
                      </h3>
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${isPopular ? 'bg-white/10 text-[#FFD6AE]' : 'bg-slate-100 text-slate-600'}`}>
                        {pkg.turnaroundDays}
                      </span>
                    </div>

                    <p className={`text-xs mt-2 min-h-[36px] ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {pkg.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-[#101D35]'}`}>
                        R{pkg.price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        ZAR Total
                      </span>
                    </div>

                    <div className="mt-2 text-xs flex items-center justify-between">
                      <span className="font-semibold text-[#FF702E]">
                        50% Deposit: R{(pkg.price / 2).toLocaleString()}
                      </span>
                      <span className={`text-[11px] ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        Balance on delivery
                      </span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isPopular ? 'text-[#FFD6AE]' : 'text-slate-500'}`}>
                      What's Included:
                    </p>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-[#FF702E]' : 'text-emerald-600'}`} />
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sculpted CTA Button (Inspired by Image 2's pill button with arrow circle) */}
                <div className="space-y-3 pt-4 border-t border-slate-200/20">
                  <button
                    onClick={() => onNavigate('apply', pkg.id)}
                    className={`group w-full py-2.5 pl-5 pr-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-between ${
                      isPopular
                        ? 'bg-[#FF702E] hover:bg-[#F64B29] text-white shadow-lg shadow-[#FF702E]/30'
                        : 'bg-[#101D35] hover:bg-[#1a2d4f] text-white'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                  </button>

                  <a
                    href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I have a quick question regarding the ${pkg.name} package (R${pkg.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-1.5 text-xs font-medium text-center block transition-colors ${
                      isPopular ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Ask a question about {pkg.name} on WhatsApp
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('packages')}
            className="text-xs text-slate-500 hover:text-[#101D35] font-semibold underline underline-offset-4"
          >
            View side-by-side feature comparison table →
          </button>
        </div>
      </section>

      {/* 5. WHY REGISPARK? (Atmospheric Architectural Bento Grid with authentic photo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101D35] text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD6AE]">
                04 — WHY REGISPARK?
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Built For The Next Generation of South African Founders
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Traditional company registration was built around complex forms, confusing legal jargon, and time wasted queuing in administrative offices. RegiSpark provides a streamlined digital alternative.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF702E] mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Convenience</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Apply directly from your smartphone, anytime, anywhere in South Africa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF702E] mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Simplicity</h4>
                    <p className="text-xs text-slate-300 mt-0.5">No complicated paperwork or confusing statutory filing procedures.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF702E] mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct WhatsApp Support</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Speak with responsive assistance specialists who guide you through the process.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF702E] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Digital Document Delivery</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Official COR14.3 certificates and MOI delivered straight to your WhatsApp and email.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] bg-slate-900">
                <img
                  src="/src/assets/images/digital_registration_desk_1793871448812.jpg"
                  alt="Modern workspace with registration documents on laptop and smartphone"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/90 via-[#101D35]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-mono font-bold text-[#FFD6AE] uppercase tracking-wider">Fast & Compliant</p>
                  <p className="text-sm font-semibold mt-0.5">Pty Ltd incorporation under South African Companies Act 71 of 2008</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. WHATSAPP CTA SECTION (Framed Card with Distinctive Rounded Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1F3F6] rounded-[2.5rem] p-8 sm:p-14 border border-slate-200 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="w-16 h-16 rounded-3xl bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-xl shadow-[#25D366]/25">
              <MessageSquare className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF702E]">
                05 — DIRECT CONCIERGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101D35]">
                Not Sure Which Package Is Right for You?
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Speak to our team on WhatsApp and get assistance before starting your application. We're happy to answer your questions about business names, SARS tax numbers, or B-BBEE affidavits.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={REGISPARK_CONFIG.getWhatsAppUrl('Hello RegiSpark, I need advice on which registration package is best for my business.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 pl-6 pr-3 py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-lg shadow-[#25D366]/25 transition-all"
              >
                <span>Chat With RegiSpark</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-full transition-all"
              >
                <span>Send Email Inquiry</span>
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Operates {REGISPARK_CONFIG.operatingHours}
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};
