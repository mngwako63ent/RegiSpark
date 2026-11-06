import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';
import { teamConsultationFounderImg, IMAGE_FALLBACKS } from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: string, packageId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 py-12 pb-24">
      
      {/* 1. Header & Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
              About RegiSpark
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight leading-tight">
              Making Business Ownership More Accessible.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              RegiSpark was created to make business registration easier and more accessible for young South Africans and aspiring entrepreneurs.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We believe starting a business should not feel like an overwhelming administrative process. Our digital-first service helps customers complete the necessary application steps from their phones while we assist with the registration paperwork.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('apply')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl shadow-lg shadow-[#FF702E]/25 transition-all"
              >
                <span>Register Your Company</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('packages')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-[#F1F3F6] hover:bg-slate-200 rounded-xl transition-all"
              >
                <span>View Packages</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-100 relative">
              <img
                src={teamConsultationFounderImg}
                onError={(e) => {
                  e.currentTarget.src = IMAGE_FALLBACKS.teamConsultationFounder;
                }}
                alt="Young South African business founders celebrating company milestone"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D35]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <p className="font-bold">Empowering Young South African Founders</p>
                <p className="text-slate-300 text-[11px]">Johannesburg · Cape Town · Durban · Nationally</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-[#101D35] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF702E]/20 text-[#FF702E] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
              Our Mission
            </span>
            <h2 className="text-2xl font-bold text-white">
              Simplifying Business Registration
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              To simplify business registration and empower more South Africans to take their first steps towards entrepreneurship by removing administrative complexity, physical barriers, and inaccessible processes.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#F1F3F6] text-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#101D35]/10 text-[#101D35] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Our Vision
            </span>
            <h2 className="text-2xl font-bold text-[#101D35]">
              Fostering a Culture of Enterprise
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To become a trusted digital business registration service that helps more South Africans formalise their businesses and pursue their entrepreneurial ambitions with confidence, dignity, and statutory compliance.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Our Story & Why We Exist */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
              The Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35]">
              Why We Exist
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              South Africa has one of the most vibrant, resilient, and creative communities of young entrepreneurs on the continent. From township creatives and freelance programmers to catering startups, logistics operators, and local retailers, countless talented individuals are building real value every single day.
            </p>
            <p>
              However, taking the step from informal trading to a registered <strong>Proprietary Limited (Pty Ltd)</strong> company has historically been daunting. Between legal document formatting, name reservations, Memorandum of Incorporation clauses, SARS tax registrations, and administrative queues, many young founders put off registration for months or even years.
            </p>
            <p>
              Without an officially registered company, entrepreneurs miss out on business bank accounts, corporate supplier databases, government tenders, grant funding, and commercial contracts.
            </p>
            <p className="font-semibold text-slate-800">
              RegiSpark was built to bridge this divide. We put the entire registration workflow onto your smartphone and provide a dedicated human team on WhatsApp to guide you through each statutory milestone.
            </p>
          </div>
        </div>

        {/* 4. Our Commitment to Customers */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
              Our Promise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35]">
              Our Commitment to Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#101D35] text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Radical Transparency</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear prices in South African Rand, a simple 50% deposit model, and zero surprise hidden administrative surcharges.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#101D35] text-sm sm:text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>POPIA Document Protection</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We handle your South African ID and personal information with enterprise-grade encryption and strict privacy protocols.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#101D35] text-sm sm:text-base">
                <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Accessible WhatsApp Support</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No endless automated phone queues. You communicate directly with dedicated support representatives who understand South African business requirements.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#101D35] text-sm sm:text-base">
                <HeartHandshake className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Name Approval Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your proposed company names encounter CIPC conflicts or pre-existing trademark rejections, we re-file alternate names without additional service charges.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#101D35] text-white p-8 sm:p-12 rounded-3xl space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Formalise Your Business?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Join the ambitious South Africans taking charge of their future. Register your Pty Ltd from your phone today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('apply')}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl shadow-xl shadow-[#FF702E]/25 transition-all"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
