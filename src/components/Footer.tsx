import React from 'react';
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin, MessageSquare, Clock, Heart } from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';
import { PACKAGES } from '../data/packages';

interface FooterProps {
  onNavigate: (page: string, packageId?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenTracker }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#101D35] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF702E] to-[#FF8C52] flex items-center justify-center shadow-lg shadow-[#FF702E]/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Regi<span className="text-[#FF702E]">Spark</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Making business registration simple, accessible, and fast for the next generation of South African entrepreneurs. Register your Pty Ltd company from your phone in 3–5 business days.
            </p>

            <div className="flex flex-col space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF702E] shrink-0" />
                <span>POPIA compliant secure document handling</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF702E] shrink-0" />
                <span>Typical processing: 3–5 business days</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={REGISPARK_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>
                  {REGISPARK_CONFIG.phoneDisplay
                    ? `Chat on WhatsApp: ${REGISPARK_CONFIG.phoneDisplay}`
                    : 'Chat with Us on WhatsApp'}
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-white transition-colors text-left"
                >
                  Registration Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About RegiSpark
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTracker}
                  className="text-[#FF702E] hover:underline transition-colors text-left font-medium"
                >
                  Track Application Status
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Packages
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => onNavigate('apply', pkg.id)}
                    className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{pkg.name} (R{pkg.price.toLocaleString()})</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF702E]" />
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('packages')}
                  className="text-xs text-[#FF702E] hover:underline"
                >
                  Compare All Inclusions →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              {REGISPARK_CONFIG.supportEmail && (
                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${REGISPARK_CONFIG.supportEmail}`}
                    className="hover:text-white transition-colors"
                  >
                    {REGISPARK_CONFIG.supportEmail}
                  </a>
                </div>
              )}

              {REGISPARK_CONFIG.phoneDisplay && (
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <a
                    href={`tel:${REGISPARK_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {REGISPARK_CONFIG.phoneDisplay}
                  </a>
                </div>
              )}

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{REGISPARK_CONFIG.operatingHours}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {REGISPARK_CONFIG.physicalAddress || 'Digital Service Hub · South Africa'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Statutory Disclaimer */}
        <div className="py-6 border-b border-white/10 text-xs text-slate-400 leading-relaxed">
          <p className="bg-white/5 p-4 rounded-xl border border-white/10">
            <span className="font-semibold text-slate-200">Statutory & Compliance Notice:</span>{' '}
            {REGISPARK_CONFIG.statutoryDisclaimer} Registration turnaround is estimated at 3–5 business days and depends on statutory verification queues, name reservation availability, and document validity under the Companies Act 71 of 2008.
          </p>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} RegiSpark (Pty) Ltd. All rights reserved. Registered in South Africa.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy & POPIA Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-white transition-colors"
            >
              Refund & Cancellation Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
