import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  FileText, 
  UploadCloud, 
  CreditCard, 
  Cog, 
  Send, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';

interface HowItWorksPageProps {
  onNavigate: (page: string, packageId?: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: '01',
      title: 'Select Your Package',
      description: 'Visit RegiSpark and choose between Starter (R999), Plus (R1,499) or Boss (R2,999) depending on whether you need legal registration alone, tax and B-BBEE compliance documents, or custom branding and a business website.',
      icon: Smartphone,
      highlight: 'Transparent pricing with no hidden charges',
      subtext: 'You can switch packages or consult us before confirming your selection.',
    },
    {
      step: '02',
      title: 'Complete the Online Application',
      description: 'Fill in our streamlined mobile form with your personal details (full name, South African 13-digit ID number, email, and WhatsApp contact) along with your proposed company names and business industry.',
      icon: FileText,
      highlight: 'Takes approximately 5 minutes on mobile',
      subtext: 'We validate your ID number format instantly to prevent administrative rejection.',
    },
    {
      step: '03',
      title: 'Upload Your Documents',
      description: 'Submit your required identity documents directly from your phone camera or file manager. Standard filings only require a clear photo or scan of your South African Green ID Book, Smart ID Card (front and back), or Passport.',
      icon: UploadCloud,
      highlight: 'Encrypted & POPIA compliant document storage',
      subtext: 'Additional documents such as proof of address may be submitted if needed for bank account facilitation.',
    },
    {
      step: '04',
      title: 'Pay Your Deposit',
      description: 'Pay your 50% deposit securely using supported South African payment options, including PayFast (Credit/Debit Card, Instant EFT across major SA banks like Capitec, FNB, Standard Bank, Absa, Nedbank) or approved mobile e-wallets.',
      icon: CreditCard,
      highlight: '50% deposit to start · 50% on completion',
      subtext: 'Once the deposit is verified, your registration process is officially triggered immediately.',
    },
    {
      step: '05',
      title: 'RegiSpark Processes Your Application',
      description: 'Our team handles the statutory heavy lifting: lodging your company name reservation (COR9.4) with CIPC, preparing company incorporation documents (COR14.3 and MOI), and filing the statutory electronic application.',
      icon: Cog,
      highlight: 'Full administrative handling & statutory liaison',
      subtext: 'If your proposed name has a conflict, we will contact you via WhatsApp to submit alternate names without extra fees.',
    },
    {
      step: '06',
      title: 'Receive Your Documents',
      description: 'Receive your official approved CIPC COR14.3 certificate, Standard MOI, share certificates, and SARS tax number documentation delivered directly to your WhatsApp and registered email in high-resolution, print-ready PDF format.',
      icon: Send,
      highlight: 'Typically completed in 3–5 business days',
      subtext: 'Your company is now officially registered, legal, and ready to trade, tender, and open a business bank account.',
    },
  ];

  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#FF702E]">
          <Clock className="w-3.5 h-3.5" />
          <span>Simple 6-Step Customer Journey</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight">
          How It Works
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From choosing your package to receiving your official CIPC certificate on WhatsApp, here is how RegiSpark takes the stress out of registering your company.
        </p>
      </section>

      {/* Visual Timeline / Steps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 before:hidden md:before:block">
          {steps.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF702E] uppercase tracking-wider font-mono">
                        Step {item.step}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#101D35]">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5 border-t border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.subtext}</span>
                    </div>
                  </div>
                </div>

                {/* Central Step Marker */}
                <div className="hidden md:flex w-12 h-12 rounded-2xl bg-[#101D35] text-white items-center justify-center font-bold text-sm shadow-lg border-4 border-white z-10 shrink-0">
                  <Icon className="w-5 h-5 text-[#FF702E]" />
                </div>

                {/* Empty opposite side for balance */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Document Requirements Checklist Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1F3F6] rounded-3xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#FF702E] uppercase tracking-wider">
              Document Preparation Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35]">
              What You Need Ready to Apply
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We keep requirements to the statutory minimum. You do not need piles of paperwork or physical affidavits before you start.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <FileCheck2 className="w-4 h-4 text-[#FF702E]" />
                  <span>South African ID Document</span>
                </div>
                <p className="text-xs text-slate-500">
                  A clear photo or scanned copy of your Green Barcoded ID Book, Smart ID Card (front and back), or valid Passport.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Smartphone className="w-4 h-4 text-[#FF702E]" />
                  <span>Proposed Company Names</span>
                </div>
                <p className="text-xs text-slate-500">
                  Up to 2 preferred business names in order of preference for the CIPC name reservation search.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CreditCard className="w-4 h-4 text-[#FF702E]" />
                  <span>50% Deposit Payment</span>
                </div>
                <p className="text-xs text-slate-500">
                  R499.50 (Starter) or R749.50 (Plus) payable via debit/credit card, Instant EFT or supported e-wallet.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF702E]" />
                  <span>Contact WhatsApp & Email</span>
                </div>
                <p className="text-xs text-slate-500">
                  Your active WhatsApp number and email to receive digital status updates and final PDF certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#101D35] to-[#1a2f57] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take the first step towards formal business ownership today. Complete your application from your phone in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('apply')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl shadow-xl shadow-[#FF702E]/25 transition-all"
            >
              <span>Register Your Company Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={REGISPARK_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Questions? WhatsApp Us</span>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            {REGISPARK_CONFIG.turnaroundDisclaimer}
          </p>
        </div>
      </section>

    </div>
  );
};
