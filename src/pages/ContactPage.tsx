import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';
import { PACKAGES } from '../data/packages';

interface ContactPageProps {
  onNavigate: (page: string, packageId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageInterest: 'plus',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 py-12 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
          Direct Support
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101D35] tracking-tight">
          We're Here to Help You Get Started.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions about registering your company? Our team is ready to assist you. Reach out via WhatsApp for immediate support or submit an inquiry below.
        </p>
      </section>

      {/* Main Grid: Contact Cards + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-[#101D35] text-white p-7 rounded-3xl shadow-xl relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Instant WhatsApp Support</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need quick answers about proposed names, required ID documents, or payment methods? WhatsApp is our fastest channel.
              </p>

              <div className="pt-2">
                <a
                  href={REGISPARK_CONFIG.getWhatsAppUrl('Hello RegiSpark, I would like to speak to a representative regarding company registration.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {REGISPARK_CONFIG.phoneDisplay
                      ? `Chat on WhatsApp: ${REGISPARK_CONFIG.phoneDisplay}`
                      : 'Chat with Us on WhatsApp'}
                  </span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                Average reply time: under 15 minutes during operating hours
              </p>
            </div>

            {/* Business Channels Details */}
            <div className="bg-[#F1F3F6] p-7 rounded-3xl border border-slate-200/80 space-y-5">
              <h2 className="text-base font-bold text-[#101D35]">
                Operating Information
              </h2>

              <div className="space-y-4 text-xs text-slate-700">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF702E] shrink-0 shadow-sm mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Customer Support Inquiries</span>
                    {REGISPARK_CONFIG.supportEmail ? (
                      <a href={`mailto:${REGISPARK_CONFIG.supportEmail}`} className="text-slate-600 hover:text-[#FF702E] underline">
                        {REGISPARK_CONFIG.supportEmail}
                      </a>
                    ) : (
                      <span className="text-slate-600">
                        Submit your message via the contact form or connect on WhatsApp
                      </span>
                    )}
                  </div>
                </div>

                {REGISPARK_CONFIG.phoneDisplay && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF702E] shrink-0 shadow-sm mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">Direct Phone Line</span>
                      <a
                        href={`tel:${REGISPARK_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                        className="text-slate-600 hover:text-[#FF702E] underline"
                      >
                        {REGISPARK_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF702E] shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Business Operating Hours</span>
                    <span className="text-slate-600">{REGISPARK_CONFIG.operatingHours}</span>
                    <span className="block text-[11px] text-slate-400">{REGISPARK_CONFIG.operatingDays}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF702E] shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs">Digital Service Reach</span>
                    <span className="text-slate-600">
                      {REGISPARK_CONFIG.physicalAddress || 'South Africa · Assisting entrepreneurs across all 9 provinces'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#101D35]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been sent to our customer facilitation team. We typically respond within 1–2 hours during South African business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', packageInterest: 'plus', message: '' });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>

                    <a
                      href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I just submitted an inquiry via your website form regarding ${formData.packageInterest} package.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Follow up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-extrabold text-[#101D35]">
                      Send Us an Inquiry
                    </h2>
                    <p className="text-xs text-slate-500">
                      Fill out this form and our registration specialists will review and get back to you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Full Name <span className="text-[#FF702E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sipho Ndlovu"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Email Address <span className="text-[#FF702E]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sipho@example.co.za"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="082 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Package of Interest
                      </label>
                      <select
                        value={formData.packageInterest}
                        onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] bg-white text-slate-800"
                      >
                        {PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} Package (R{pkg.price.toLocaleString()})
                          </option>
                        ))}
                        <option value="general">General Registration Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Your Message or Question <span className="text-[#FF702E]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your proposed business concept or any questions you have regarding CIPC documents..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 text-sm font-bold text-white bg-[#FF702E] hover:bg-[#e05b1c] rounded-xl shadow-lg shadow-[#FF702E]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your details are protected under POPIA and are used strictly to reply to your inquiry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
