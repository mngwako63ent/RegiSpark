import React, { useState } from 'react';
import { MessageSquare, X, Send, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';

interface WhatsAppWidgetProps {
  currentPackageContext?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ currentPackageContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    {
      label: 'Help me choose a package',
      text: 'Hello RegiSpark, I am unsure which registration package is best for my new business. Could you help advise me?',
    },
    {
      label: 'Question about SA ID documents',
      text: 'Hi RegiSpark, I have a question regarding the required South African ID documents for Pty Ltd registration.',
    },
    {
      label: 'How does the 50% deposit work?',
      text: 'Hello RegiSpark, can you clarify how the 50% deposit and remaining balance payment work?',
    },
  ];

  const handleSendPrompt = (text: string) => {
    const url = REGISPARK_CONFIG.getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSendPrompt(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Concierge Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#101D35] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#101D35] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">RegiSpark Support</h4>
                <p className="text-xs text-slate-300">Typically replies in under 15 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm text-xs text-slate-700 leading-relaxed">
              👋 <strong>Sawubona! Welcome to RegiSpark.</strong>
              <p className="mt-1">
                Have a question about registering your company or submitting your documents? We are here to help you get your Pty Ltd officially registered.
              </p>
            </div>

            {/* Quick suggested questions */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Quick questions:
              </span>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt.text)}
                  className="w-full text-left text-xs bg-white hover:bg-[#FF702E]/5 hover:border-[#FF702E]/40 transition-colors p-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{prompt.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF702E] shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Direct message input */}
            <form onSubmit={handleCustomSubmit} className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] bg-white text-slate-800"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl shadow-sm transition-colors shrink-0"
                  aria-label="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span>Direct WhatsApp Helpline</span>
            <span className="font-medium text-emerald-600">
              {REGISPARK_CONFIG.phoneDisplay || 'Live Chat Online'}
            </span>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 bg-white py-1.5 px-3 rounded-full shadow-lg border border-slate-200 text-xs font-semibold text-slate-800 animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with RegiSpark</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageSquare className="w-7 h-7" />
          )}
        </button>
      </div>

    </div>
  );
};
