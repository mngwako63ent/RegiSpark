import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X as CloseIcon, 
  HelpCircle, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Info
} from 'lucide-react';
import { PACKAGES, COMPARISON_FEATURES } from '../data/packages';
import { REGISPARK_CONFIG } from '../data/config';

interface PackagesPageProps {
  onNavigate: (page: string, packageId?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pricingFaqs = [
    {
      q: 'How does the 50% deposit work?',
      a: 'We only require a 50% deposit to initiate your CIPC company name reservation and prepare statutory incorporation filings. The remaining 50% balance is only payable when your official documents have been generated and are ready for digital delivery.',
    },
    {
      q: 'Are there any hidden CIPC or government fees?',
      a: 'No. The prices displayed in ZAR are all-inclusive for our standard services. Your package covers the administrative submission of your company name reservation and the filing of your Pty Ltd company incorporation.',
    },
    {
      q: 'What is the turnaround time for each package?',
      a: 'The Starter and Plus packages typically complete within 3–5 business days, subject to CIPC verification queues. The Boss package takes 5–7 business days to accommodate custom logo design drafts, review revisions, and website setup.',
    },
    {
      q: 'Can I add additional directors to my company?',
      a: 'Yes. Up to 3 directors are included as standard in your initial filing application. You can provide additional directors during the application or in consultation with our team on WhatsApp.',
    },
    {
      q: 'What does the Boss package website include?',
      a: 'The Boss package includes a clean, mobile-responsive one-page business landing page highlighting your brand story, core services, contact details, and inquiry links, optimized for fast mobile browsing.',
    },
  ];

  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* Header with Architectural Depth */}
      <section className="relative overflow-hidden bg-[#101D35] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 -mt-12 rounded-b-[2.5rem]">
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(255, 112, 46, 0.2) 0%, transparent 70%)'
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD6AE]">
            01 — TRANSPARENT REGISTRATION TIERS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            PACKAGES & PRICING
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose the registration tier built for your business ambitions. Every package includes verified CIPC electronic lodgment and WhatsApp support.
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-[#FFD6AE]">
              <span>50% deposit upfront · Balance only on approved COR14.3 release</span>
            </span>
          </div>
        </div>
      </section>

      {/* 1. PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`rounded-[2rem] p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? 'bg-[#101D35] text-white shadow-2xl ring-2 ring-[#FF702E] lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <span className="inline-block whitespace-nowrap px-4 py-1 text-xs font-extrabold tracking-wider uppercase rounded-full bg-[#FF702E] text-white shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Description */}
                  <div className="border-b pb-6 mb-6 border-slate-200/20">
                    <div className="flex items-center justify-between">
                      <h2 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-[#101D35]'}`}>
                        {pkg.name}
                      </h2>
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${isPopular ? 'bg-white/10 text-[#FFD6AE]' : 'bg-slate-100 text-slate-600'}`}>
                        {pkg.turnaroundDays}
                      </span>
                    </div>

                    <p className={`text-xs mt-2 min-h-[40px] leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {pkg.description}
                    </p>

                    {/* Price in ZAR */}
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-[#101D35]'}`}>
                        R{pkg.price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        ZAR Total
                      </span>
                    </div>

                    {/* Deposit Breakdown */}
                    <div className="mt-2 text-xs flex items-center justify-between">
                      <span className="font-semibold text-[#FF702E]">
                        50% Deposit: R{(pkg.price / 2).toLocaleString()}
                      </span>
                      <span className={`text-[11px] ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        Balance: R{(pkg.price / 2).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className={`p-3 rounded-2xl mb-6 text-xs leading-relaxed ${isPopular ? 'bg-white/5 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                    <strong className="text-slate-900 font-semibold block mb-0.5 text-[11px] font-mono uppercase tracking-wider" style={{ color: isPopular ? '#FFD6AE' : '#101D35' }}>
                      Best For:
                    </strong>
                    {pkg.bestFor}
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isPopular ? 'text-[#FFD6AE]' : 'text-slate-500'}`}>
                      Package Includes:
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
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>

                  <a
                    href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I would like to ask some questions before choosing the ${pkg.name} package (R${pkg.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-1.5 text-xs font-medium text-center block transition-colors ${
                      isPopular ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Chat with an advisor on WhatsApp
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 2. COMPREHENSIVE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35]">
              Compare Package Inclusions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              A detailed side-by-side view of what is included with each package.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    Service Feature
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-[#101D35] w-1/5">
                    Starter
                    <span className="block text-xs font-normal text-slate-500">R999</span>
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-[#FF702E] w-1/5 bg-orange-50/50 rounded-t-xl">
                    Plus
                    <span className="block text-xs font-normal text-slate-500">R1,499</span>
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-[#101D35] w-1/5">
                    Boss
                    <span className="block text-xs font-normal text-slate-500">R2,999</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-800 font-medium">
                      <div className="flex items-center gap-1.5">
                        <span>{row.feature}</span>
                        {row.tooltip && (
                          <span title={row.tooltip} className="cursor-help text-slate-400">
                            <Info className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Starter */}
                    <td className="py-3.5 px-4 text-center text-xs">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <CloseIcon className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600 font-medium">{row.starter}</span>
                      )}
                    </td>

                    {/* Plus (Highlighted) */}
                    <td className="py-3.5 px-4 text-center text-xs bg-orange-50/30">
                      {typeof row.plus === 'boolean' ? (
                        row.plus ? (
                          <Check className="w-4 h-4 text-[#FF702E] font-bold mx-auto" />
                        ) : (
                          <CloseIcon className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-800 font-bold">{row.plus}</span>
                      )}
                    </td>

                    {/* Boss */}
                    <td className="py-3.5 px-4 text-center text-xs">
                      {typeof row.boss === 'boolean' ? (
                        row.boss ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <CloseIcon className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-800 font-medium">{row.boss}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-100">
            <span>Ready to begin? Applications take approximately 5 minutes.</span>
            <button
              onClick={() => onNavigate('apply', 'plus')}
              className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl transition-colors shadow-sm"
            >
              <span>Apply with Most Popular (Plus)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. PRICING FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35]">
            Pricing & Payment Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Everything you need to know about deposits, balance payments, and turnaround.
          </p>
        </div>

        <div className="space-y-3">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#101D35]">{faq.q}</span>
                  <span className="text-[#FF702E] font-bold text-lg shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM ADVISOR BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101D35] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Need a custom quote or have specific shareholder structures?</h3>
            <p className="text-xs text-slate-300">Our customer support specialists are available on WhatsApp to guide you.</p>
          </div>
          <a
            href={REGISPARK_CONFIG.getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
