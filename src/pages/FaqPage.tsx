import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  ChevronDown, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { FAQS } from '../data/faqs';
import { REGISPARK_CONFIG } from '../data/config';

interface FaqPageProps {
  onNavigate: (page: string, packageId?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & CIPC' },
    { id: 'packages', label: 'Packages & Services' },
    { id: 'documents', label: 'Documents & Requirements' },
    { id: 'payment', label: 'Deposits & Payments' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
          Got Questions? We Have Answers.
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Clear, plain-language answers about South African Pty Ltd registration, required documents, CIPC timelines, and WhatsApp support.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. CIPC, deposit, SARS, ID, website)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl shadow-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] text-sm text-slate-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#101D35] text-white shadow-sm'
                  : 'bg-[#F1F3F6] text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching questions found</h3>
            <p className="text-xs text-slate-500">
              Try searching with different terms or message us directly on WhatsApp.
            </p>
            <a
              href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I have a question: ${searchQuery}`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#FF702E] hover:underline"
            >
              <span>Ask us on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#FF702E]/40 shadow-md ring-1 ring-[#FF702E]/20'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-xs font-bold text-[#FF702E] font-mono mt-0.5 shrink-0">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#101D35] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'bg-[#FF702E] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 pl-11">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* WhatsApp Help Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101D35] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Have a question not listed here?</h3>
            <p className="text-xs text-slate-300">
              Our support team is active on WhatsApp during South African business hours.
            </p>
          </div>
          <a
            href={REGISPARK_CONFIG.getWhatsAppUrl('Hello RegiSpark, I have a specific question about registering my Pty Ltd company.')}
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
