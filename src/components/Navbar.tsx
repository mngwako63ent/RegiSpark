import React, { useState } from 'react';
import { Menu, X, ArrowRight, Search, ArrowUpRight } from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, packageId?: string) => void;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenTracker }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Packages' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About Us' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative z-30 bg-[#101D35] text-white select-none">
      
      {/* DESKTOP NOTCHED NAVIGATION BAR (Shown on xl screens 1280px+ where pod widths fit with ample margin) */}
      <div className="hidden xl:flex items-stretch justify-between relative min-h-[72px] 2xl:min-h-[76px]">
        
        {/* 1. Left White Tab: Brand Logo with Inverted Fillet Curve */}
        <div className="relative bg-white pl-6 pr-8 2xl:pl-8 2xl:pr-10 py-3.5 2xl:py-4 rounded-br-[2rem] 2xl:rounded-br-[2.25rem] flex items-center z-10 shrink-0">
          
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 2xl:gap-3 text-left focus:outline-none group"
            aria-label="RegiSpark Home"
          >
            <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-xl 2xl:rounded-2xl bg-gradient-to-br from-[#FF702E] to-[#FF8C52] flex items-center justify-center shadow-md shadow-[#FF702E]/25 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 2xl:w-5 2xl:h-5 text-white"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg 2xl:text-xl font-extrabold tracking-tight text-[#101D35] flex items-center">
                Regi<span className="text-[#FF702E]">Spark</span>
              </span>
              <span className="text-[9px] 2xl:text-[10px] uppercase tracking-wider text-slate-500 font-bold -mt-0.5">
                Pty Ltd Registrations
              </span>
            </div>
          </button>

          {/* Concave Corner Fillet at Top-Right of Left Tab */}
          <svg
            className="absolute -right-6 top-0 w-6 h-6 text-white fill-current pointer-events-none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M0,24 C0,10.745 10.745,0 24,0 L0,0 Z" />
          </svg>
        </div>

        {/* 2. Center Dark Area: Clean Navigation Links (Adaptive gap to prevent any clipping) */}
        <div className="flex-1 flex items-center justify-center px-2 2xl:px-4 min-w-0">
          <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-8 text-xs 2xl:text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors whitespace-nowrap py-1.5 relative hover:text-white ${
                    isActive ? 'text-white font-bold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF702E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* 3. Right White Tab: Sculpted CTA Button & Tracker */}
        <div className="relative bg-white pl-8 pr-6 2xl:pl-10 2xl:pr-8 py-3.5 2xl:py-4 rounded-bl-[2rem] 2xl:rounded-bl-[2.25rem] flex items-center gap-2.5 2xl:gap-4 z-10 shrink-0">
          
          {/* Concave Corner Fillet at Top-Left of Right Tab */}
          <svg
            className="absolute -left-6 top-0 w-6 h-6 text-white fill-current pointer-events-none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M0,0 C13.255,0 24,10.745 24,24 L24,0 Z" />
          </svg>

          <button
            onClick={onOpenTracker}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 text-xs font-bold text-slate-700 hover:text-[#101D35] rounded-full hover:bg-slate-100 transition-colors whitespace-nowrap"
            title="Track existing application"
          >
            <Search className="w-3.5 h-3.5 text-[#FF702E]" />
            <span>Track Status</span>
          </button>

          <button
            onClick={() => handleLinkClick('apply')}
            className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 2xl:pl-5 2xl:pr-2 2xl:py-2 text-xs font-bold text-white bg-[#101D35] hover:bg-[#1a2d4f] active:scale-[0.98] rounded-full shadow-lg shadow-[#101D35]/20 transition-all whitespace-nowrap"
          >
            <span>Register <span className="hidden 2xl:inline">Your </span>Company</span>
            <span className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-white" />
            </span>
          </button>
        </div>

      </div>

      {/* MOBILE / TABLET / RESIZED-WINDOW NAVIGATION BAR (Full adaptive experience up to 1279px) */}
      <div className="xl:hidden flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white border-b border-slate-200">
        
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF702E] to-[#FF8C52] flex items-center justify-center text-white shadow-md">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#101D35] leading-tight">
              Regi<span className="text-[#FF702E]">Spark</span>
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider text-slate-500 font-bold -mt-0.5">
              Pty Ltd Registrations
            </span>
          </div>
        </button>

        {/* Right Actions: Responsive cluster that never cuts off */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Track Status Button (Visible on tablet/medium screen) */}
          <button
            onClick={onOpenTracker}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#101D35] bg-slate-100 hover:bg-slate-200/80 rounded-full transition-colors whitespace-nowrap"
            title="Track application"
          >
            <Search className="w-3.5 h-3.5 text-[#FF702E]" />
            <span>Track Status</span>
          </button>

          {/* Quick Search Icon on mobile */}
          <button
            onClick={onOpenTracker}
            className="sm:hidden p-2 text-slate-700 hover:text-[#101D35] rounded-lg hover:bg-slate-100"
            aria-label="Track Application"
            title="Track Status"
          >
            <Search className="w-5 h-5 text-[#FF702E]" />
          </button>

          {/* Direct CTA on tablet/medium screen */}
          <button
            onClick={() => handleLinkClick('apply')}
            className="hidden md:inline-flex items-center gap-1.5 pl-3.5 pr-1.5 py-1.5 text-xs font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-full shadow-md shadow-[#FF702E]/20 transition-all whitespace-nowrap"
          >
            <span>Register Company</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </span>
          </button>

          {/* Mobile / Tablet Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#101D35] rounded-xl hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#101D35] px-5 pt-3 pb-6 space-y-3 text-white border-b border-white/10 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl text-left transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF702E]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Search className="w-4 h-4 text-[#FF702E]" />
              <span>Track Application Reference</span>
            </button>

            <button
              onClick={() => handleLinkClick('apply')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-full shadow-lg shadow-[#FF702E]/20 transition-colors"
            >
              <span>Register Your Company</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-center">
            <span className="text-xs text-slate-400">
              Need assistance?{' '}
              <a
                href={REGISPARK_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="text-[#FF702E] font-medium underline"
              >
                {REGISPARK_CONFIG.phoneDisplay
                  ? `WhatsApp us at ${REGISPARK_CONFIG.phoneDisplay}`
                  : 'Chat with us on WhatsApp'}
              </a>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
