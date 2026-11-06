import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Lock } from 'lucide-react';
import { REGISPARK_CONFIG } from '../data/config';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#101D35] px-6 py-5 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            {type === 'terms' && <FileText className="w-5 h-5 text-[#FF702E]" />}
            {type === 'privacy' && <Lock className="w-5 h-5 text-[#FF702E]" />}
            {type === 'refund' && <RefreshCw className="w-5 h-5 text-[#FF702E]" />}
            <div>
              <h3 className="text-lg font-bold text-white">
                {type === 'terms' && 'Terms and Conditions of Service'}
                {type === 'privacy' && 'Privacy Policy & POPIA Compliance'}
                {type === 'refund' && 'Refund & Cancellation Policy'}
              </h3>
              <p className="text-xs text-slate-300">RegiSpark (Pty) Ltd · South Africa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          {type === 'terms' && (
            <>
              <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-amber-900 text-xs">
                <strong>Important Notice:</strong> RegiSpark is a private South African document preparation and facilitation service. We are not CIPC or SARS. By engaging our service, you authorize us to prepare and lodge your incorporation forms on your behalf.
              </div>

              <h4 className="font-bold text-slate-900 text-base">1. Engagement of Service</h4>
              <p>
                RegiSpark provides administrative facilitation for private company registration under the South African Companies Act 71 of 2008. We reserve proposed company names, prepare statutory documents (COR14.3, COR15.1A), and facilitate SARS corporate income tax filing assistance based on the information provided by the applicant.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Applicant Responsibilities</h4>
              <p>
                The applicant warrants that all personal details, South African identification documents, and proposed enterprise names provided are authentic, lawful, and accurate. Applicants are responsible for confirming that proposed names do not infringe on pre-existing trademarks or reserved statutory intellectual property.
              </p>

              <h4 className="font-bold text-slate-900 text-base">3. Deposits & Processing Timeline</h4>
              <p>
                A 50% non-refundable deposit covers administrative statutory filing fees and name reservation costs incurred with CIPC. The estimated turnaround is 3 to 5 business days from receipt of complete, legible documents and confirmed deposit. Turnaround may vary depending on statutory CIPC system operational conditions.
              </p>

              <h4 className="font-bold text-slate-900 text-base">4. Outstanding Balances & Document Release</h4>
              <p>
                The final 50% package balance is payable prior to the release of official digital registration certificates, certified MOI documents, and SARS documentation bundles.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>POPIA Compliance:</strong> In accordance with the Protection of Personal Information Act 4 of 2013 (POPIA), RegiSpark ensures your South African identity documents and personal records are encrypted and protected.
                </span>
              </div>

              <h4 className="font-bold text-slate-900 text-base">1. Collection of Personal Information</h4>
              <p>
                To complete your CIPC Pty Ltd company registration, we collect required personal details including full names, 13-digit South African ID numbers, contact phone and WhatsApp numbers, email addresses, and residential/business physical addresses.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Purpose of Processing</h4>
              <p>
                Your personal details and identity documents are used exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Lodge company incorporation forms with CIPC.</li>
                <li>Verify identity in accordance with statutory compliance and anti-fraud regulations.</li>
                <li>Deliver completed registration certificates via secure WhatsApp and email links.</li>
                <li>Provide customer service and transaction updates.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-base">3. Storage & Document Security</h4>
              <p>
                Uploaded identity documents are transmitted over SSL/TLS encrypted connections and stored in secure private storage buckets. We never sell, lease, or publicly expose your private identity documents. Once registration is finalized, documents are retained strictly as required by statutory accounting and record-keeping regulations.
              </p>

              <h4 className="font-bold text-slate-900 text-base">4. Your Data Rights</h4>
              <p>
                Under POPIA, you have the right to request access to your personal information, request correction of inaccurate data, or request deletion of data subject to statutory legal record retention mandates.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">1. Deposit Policy</h4>
              <p>
                Upon payment of the 50% deposit, RegiSpark immediately allocates administrative resources, checks name registers, and lodges name reservation requests with CIPC, incurring statutory government costs. Consequently, the initial 50% deposit is non-refundable once statutory filing has commenced.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Name Rejection Guarantee</h4>
              <p>
                If all four of your submitted proposed company names are rejected by CIPC due to similarity or trademark conflicts, RegiSpark will submit up to four alternative company names at no additional filing fee until an acceptable name is approved.
              </p>

              <h4 className="font-bold text-slate-900 text-base">3. Cancellations Prior to Filing</h4>
              <p>
                If an applicant requests cancellation before RegiSpark has initiated any CIPC searches or submissions (within 2 hours of payment), a full refund less standard merchant processing fees (3.5%) will be issued to the original payment method within 5–7 business days.
              </p>

              <h4 className="font-bold text-slate-900 text-base">4. Contacting Refunds</h4>
              <p>
                For any queries regarding refunds or billing disputes, please contact our support team at{' '}
                <a href={`mailto:${REGISPARK_CONFIG.supportEmail}`} className="text-[#FF702E] font-medium underline">
                  {REGISPARK_CONFIG.supportEmail}
                </a>{' '}
                or call/WhatsApp{' '}
                <a href={`tel:${REGISPARK_CONFIG.phoneDisplay.replace(/\s+/g, '')}`} className="text-[#FF702E] font-medium underline">
                  {REGISPARK_CONFIG.phoneDisplay}
                </a>{' '}
                with your Application Reference number.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">Last updated: January 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#101D35] hover:bg-[#1a2d4f] rounded-xl transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
