import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Upload, 
  FileCheck, 
  CreditCard, 
  AlertCircle, 
  Building, 
  User, 
  Smartphone, 
  FileText, 
  Copy, 
  Check, 
  MessageSquare,
  Printer,
  Sparkles,
  Info
} from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { REGISPARK_CONFIG } from '../data/config';
import { PackageId, ApplicationFormData } from '../types';

interface ApplicationPageProps {
  initialPackageId?: string;
  onNavigate: (page: string, packageId?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
  onOpenTracker: () => void;
}

export const ApplicationPage: React.FC<ApplicationPageProps> = ({
  initialPackageId = 'plus',
  onNavigate,
  onOpenLegal,
  onOpenTracker,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPkgId, setSelectedPkgId] = useState<PackageId>(
    (initialPackageId as PackageId) || 'plus'
  );

  const selectedPackage =
    PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[1];

  const depositAmount = (selectedPackage.price * REGISPARK_CONFIG.defaultDepositPercentage) / 100;
  const balanceAmount = selectedPackage.price - depositAmount;

  // Form State
  const [formData, setFormData] = useState<ApplicationFormData>({
    packageId: selectedPkgId,
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    proposedName1: '',
    proposedName2: '',
    industry: 'Technology & Digital Services',
    businessDescription: '',
    province: 'Gauteng',
    businessAddress: '',
    idDocumentName: '',
    idDocumentSize: '',
    paymentMethod: 'payfast',
    depositAmount: depositAmount,
    totalAmount: selectedPackage.price,
    balanceAmount: balanceAmount,
    termsAccepted: false,
    popiaConsent: false,
  });

  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileUploading, setFileUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<{
    reference: string;
    submittedAt: string;
    package: string;
    amountPaid: number;
    paymentMethod: string;
    companyName: string;
  } | null>(null);

  // Sync package changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      packageId: selectedPkgId,
      depositAmount: (selectedPackage.price * REGISPARK_CONFIG.defaultDepositPercentage) / 100,
      totalAmount: selectedPackage.price,
      balanceAmount: selectedPackage.price - (selectedPackage.price * REGISPARK_CONFIG.defaultDepositPercentage) / 100,
    }));
  }, [selectedPkgId, selectedPackage]);

  // South African Provinces
  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape',
  ];

  // Industry sectors
  const industries = [
    'Technology & Digital Services',
    'Retail & E-commerce',
    'Construction, Civils & Maintenance',
    'Food, Catering & Hospitality',
    'Logistics, Transport & Couriers',
    'Consulting & Professional Services',
    'Creative, Media & Photography',
    'Agriculture, Farming & Agro-processing',
    'Cleaning, Hygiene & Facilities',
    'Security & Risk Management',
    'Health, Beauty & Wellness',
    'Other General Trading',
  ];

  // Validate SA ID structure
  const validateSAID = (id: string) => {
    const cleaned = id.replace(/\s+/g, '');
    if (!/^\d{13}$/.test(cleaned)) {
      return 'South African ID must contain exactly 13 numeric digits.';
    }
    // Check valid month and day
    const month = parseInt(cleaned.substring(2, 4), 10);
    const day = parseInt(cleaned.substring(4, 6), 10);
    if (month < 1 || month > 12) {
      return 'ID month must be between 01 and 12.';
    }
    if (day < 1 || day > 31) {
      return 'ID day must be between 01 and 31.';
    }
    return '';
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full legal name is required.';
      if (!formData.idNumber.trim()) {
        newErrors.idNumber = '13-digit South African ID number is required.';
      } else {
        const idErr = validateSAID(formData.idNumber);
        if (idErr) newErrors.idNumber = idErr;
      }
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Valid phone number is required.';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = 'Valid email address is required.';
      }
      if (!sameAsPhone && !formData.whatsappNumber.trim()) {
        newErrors.whatsappNumber = 'WhatsApp number is required.';
      }
    }

    if (step === 3) {
      if (!formData.proposedName1.trim()) {
        newErrors.proposedName1 = 'At least one proposed company name is required.';
      } else if (formData.proposedName1.trim().length < 3) {
        newErrors.proposedName1 = 'Company name must be at least 3 characters.';
      }
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = 'Please provide a short description of your business activity.';
      }
      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = 'Registered business address or residential address is required.';
      }
    }

    if (step === 4) {
      if (!formData.idDocumentName) {
        newErrors.idDocument = 'Please upload a clear copy of your South African ID document.';
      }
    }

    if (step === 5) {
      if (!formData.termsAccepted) {
        newErrors.terms = 'You must agree to the Terms and Conditions to proceed.';
      }
      if (!formData.popiaConsent) {
        newErrors.popia = 'Consent for statutory data processing under POPIA is required.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Mock File Upload with verification
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (<10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrors({ idDocument: 'File exceeds 10MB limit. Please upload a smaller image or PDF.' });
      return;
    }

    setFileUploading(true);
    setErrors({});

    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        idDocumentName: file.name,
        idDocumentSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setFileUploading(false);
      setUploadSuccess(true);
    }, 700);
  };

  // Submit Application and trigger payment processing
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);

    // Simulate secure backend generation & checkout initiation
    setTimeout(() => {
      const generatedRef = `RS-ZA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRecord({
        reference: generatedRef,
        submittedAt: new Date().toLocaleDateString('en-ZA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        package: selectedPackage.name,
        amountPaid: depositAmount,
        paymentMethod:
          formData.paymentMethod === 'payfast'
            ? 'PayFast Verified'
            : formData.paymentMethod === 'instant_eft'
            ? 'Instant EFT'
            : formData.paymentMethod === 'capitec_pay'
            ? 'Capitec Pay'
            : 'E-Wallet',
        companyName: formData.proposedName1.trim() + ' (Pty) Ltd',
      });
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }, 1200);
  };

  // If already successfully submitted, show the confirmation screen
  if (submittedRecord) {
    return (
      <div className="py-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header Banner */}
          <div className="text-center space-y-3 pb-6 border-b border-slate-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Application & Deposit Received
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
              Your Application Has Been Received!
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Congratulations! Your Pty Ltd registration request for <strong>{submittedRecord.companyName}</strong> has been logged into our filing queue.
            </p>
          </div>

          {/* Reference Badge Card */}
          <div className="bg-[#101D35] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-300 font-medium">Your Official Application Reference:</p>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#FF702E] font-mono mt-0.5">
                {submittedRecord.reference}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Please keep this reference safe for all WhatsApp queries and tracking.
              </p>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(submittedRecord.reference);
                alert(`Copied reference ${submittedRecord.reference} to clipboard!`);
              }}
              className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Copy className="w-3.5 h-3.5 text-[#FF702E]" />
              <span>Copy Reference</span>
            </button>
          </div>

          {/* Details Breakdown */}
          <div className="bg-[#F1F3F6] p-6 rounded-2xl border border-slate-200/80 space-y-4 text-xs sm:text-sm">
            <h3 className="font-bold text-[#101D35] text-sm uppercase tracking-wider">
              Application Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-slate-500 block text-xs">Proposed Company Name:</span>
                <span className="font-semibold text-slate-900">{submittedRecord.companyName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Selected Package:</span>
                <span className="font-semibold text-slate-900">{submittedRecord.package} Package (R{selectedPackage.price.toLocaleString()})</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Deposit Verified:</span>
                <span className="font-semibold text-emerald-700">R{submittedRecord.amountPaid.toLocaleString()} (50% Deposit via {submittedRecord.paymentMethod})</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Remaining Balance:</span>
                <span className="font-semibold text-slate-900">R{balanceAmount.toLocaleString()} (Due upon final COR14.3 delivery)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Applicant / Director:</span>
                <span className="font-semibold text-slate-900">{formData.fullName} ({formData.idNumber})</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Submission Timestamp:</span>
                <span className="font-semibold text-slate-900">{submittedRecord.submittedAt}</span>
              </div>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wider">
              What Happens Next?
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Step 1: Document Audit & Name Search (Within 4 hours):</strong> Our specialists verify your SA ID and run an initial phonetic check on your proposed names against CIPC registers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Step 2: CIPC Lodgment:</strong> We submit the official COR9.4 name reservation followed by statutory electronic incorporation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Step 3: Milestone Updates via WhatsApp:</strong> You will receive WhatsApp notifications at each milestone.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Step 4: Digital Certificate Delivery (3–5 business days):</strong> Your final approved COR14.3 certificate and company pack will be delivered to your WhatsApp and email.</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <a
              href={REGISPARK_CONFIG.getWhatsAppUrl(`Hello RegiSpark, I have just submitted my Pty Ltd application for "${submittedRecord.companyName}". My Application Reference is ${submittedRecord.reference}. Please confirm receipt!`)}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-lg shadow-[#25D366]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp with Reference</span>
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => window.print()}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Summary</span>
              </button>

              <button
                onClick={onOpenTracker}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-white bg-[#101D35] hover:bg-[#1a2d4f] rounded-xl transition-colors"
              >
                <span>Track Live Progress</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="py-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FF702E]">
          Official Pty Ltd Registration
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
          Register Your Company Online
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
          Complete this simple form to lodge your CIPC private company incorporation. Takes under 5 minutes from your phone.
        </p>
      </div>

      {/* Progress Stepper */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-5 gap-2 text-center text-xs">
          {[
            { num: 1, label: 'Package' },
            { num: 2, label: 'Personal' },
            { num: 3, label: 'Company' },
            { num: 4, label: 'Documents' },
            { num: 5, label: 'Payment' },
          ].map((s) => {
            const isCompleted = s.num < currentStep;
            const isCurrent = s.num === currentStep;

            return (
              <div key={s.num} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : isCurrent
                      ? 'bg-[#FF702E] text-white ring-4 ring-[#FF702E]/20'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={`mt-1.5 text-[11px] font-semibold hidden sm:block ${
                    isCurrent ? 'text-[#101D35]' : 'text-slate-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-[#FF702E] h-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP CONTAINER */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        
        {/* ================= STEP 1: PACKAGE ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#101D35]">
                Step 1: Confirm Your Registration Package
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select or switch the package that matches your operational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all relative ${
                      isSelected
                        ? 'border-[#FF702E] bg-orange-50/20 shadow-md ring-2 ring-[#FF702E]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                        <span className="inline-block whitespace-nowrap text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase px-3 py-0.5 rounded-full bg-[#FF702E] text-white shadow-md">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-base">{pkg.name}</h3>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-[#FF702E] bg-[#FF702E]' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>

                    <p className="text-2xl font-extrabold text-[#101D35] mt-2">
                      R{pkg.price.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-[#FF702E] font-semibold mt-0.5">
                      50% Deposit: R{(pkg.price / 2).toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Selected Package Breakdown */}
            <div className="bg-[#F1F3F6] p-5 rounded-2xl border border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 text-sm">
                <span>Selected: {selectedPackage.name} Package</span>
                <span className="text-[#FF702E]">R{selectedPackage.price.toLocaleString()} ZAR</span>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                {selectedPackage.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-slate-700">
                <span>Initial Deposit Due (50%):</span>
                <span className="font-bold text-slate-900">R{depositAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-slate-500 text-[11px]">
                <span>Remaining Balance on Delivery (50%):</span>
                <span>R{balanceAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PERSONAL INFORMATION ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#101D35]">
                Step 2: Director / Personal Information
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter the primary director's details as they appear on their South African ID document.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700">
                  Full Legal Name & Surname <span className="text-[#FF702E]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Thabo Sibusiso Mokoena"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                {errors.fullName && <p className="text-xs text-rose-600">{errors.fullName}</p>}
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700">
                  South African ID Number (13 Digits) <span className="text-[#FF702E]">*</span>
                </label>
                <input
                  type="text"
                  maxLength={13}
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value.replace(/\D/g, '') })}
                  placeholder="e.g. 9608145290087"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-mono tracking-wider focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                <p className="text-[11px] text-slate-500">
                  Must be 13 digits. Foreign passport holders can specify their passport number during document upload.
                </p>
                {errors.idNumber && <p className="text-xs text-rose-600">{errors.idNumber}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Mobile Phone Number <span className="text-[#FF702E]">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData({
                      ...formData,
                      phoneNumber: val,
                      whatsappNumber: sameAsPhone ? val : formData.whatsappNumber,
                    });
                  }}
                  placeholder="082 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                {errors.phoneNumber && <p className="text-xs text-rose-600">{errors.phoneNumber}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Email Address <span className="text-[#FF702E]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="director@example.co.za"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                <p className="text-[11px] text-slate-500">
                  Your final CIPC COR14.3 certificates will be emailed here.
                </p>
                {errors.email && <p className="text-xs text-rose-600">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2 space-y-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={sameAsPhone}
                    onChange={(e) => {
                      setSameAsPhone(e.target.checked);
                      if (e.target.checked) {
                        setFormData({ ...formData, whatsappNumber: formData.phoneNumber });
                      }
                    }}
                    className="w-4 h-4 text-[#FF702E] rounded border-slate-300 focus:ring-[#FF702E]"
                  />
                  <span>My WhatsApp number is the same as my mobile number</span>
                </label>

                {!sameAsPhone && (
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-bold text-slate-700">
                      WhatsApp Number <span className="text-[#FF702E]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="082 987 6543"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                    />
                    {errors.whatsappNumber && <p className="text-xs text-rose-600">{errors.whatsappNumber}</p>}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ================= STEP 3: COMPANY DETAILS ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#101D35]">
                Step 3: Proposed Company Details
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Provide your preferred business names for CIPC name reservation (COR9.4).
              </p>
            </div>

            <div className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Primary Proposed Company Name <span className="text-[#FF702E]">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.proposedName1}
                    onChange={(e) => setFormData({ ...formData, proposedName1: e.target.value })}
                    placeholder="e.g. Apex Solar Energy"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                  />
                  <span className="px-3.5 py-3 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 shrink-0">
                    (Pty) Ltd
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Do not type "(Pty) Ltd" — CIPC appends this statutory designation automatically.
                </p>
                {errors.proposedName1 && <p className="text-xs text-rose-600">{errors.proposedName1}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Alternative Proposed Company Name (Recommended backup)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.proposedName2}
                    onChange={(e) => setFormData({ ...formData, proposedName2: e.target.value })}
                    placeholder="e.g. Apex Green Solutions"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                  />
                  <span className="px-3.5 py-3 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 shrink-0">
                    (Pty) Ltd
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Used if CIPC rejects your primary name due to a pre-existing registered trademark.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Business Industry / Sector <span className="text-[#FF702E]">*</span>
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] bg-white text-slate-800"
                  >
                    {industries.map((ind, i) => (
                      <option key={i} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Province of Principal Business <span className="text-[#FF702E]">*</span>
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E] bg-white text-slate-800"
                  >
                    {provinces.map((prov, i) => (
                      <option key={i} value={prov}>
                        {prov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Brief Business Description <span className="text-[#FF702E]">*</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.businessDescription}
                  onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                  placeholder="e.g. Residential solar panel installations, electrical maintenance, and battery storage solutions."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                {errors.businessDescription && (
                  <p className="text-xs text-rose-600">{errors.businessDescription}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Registered Business Address <span className="text-[#FF702E]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.businessAddress}
                  onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                  placeholder="e.g. 42 Republic Road, Randburg, Johannesburg, 2194"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#FF702E] focus:ring-1 focus:ring-[#FF702E]"
                />
                <p className="text-[11px] text-slate-500">
                  Residential address is accepted if you run an online, freelance, or remote business.
                </p>
                {errors.businessAddress && (
                  <p className="text-xs text-rose-600">{errors.businessAddress}</p>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ================= STEP 4: DOCUMENT UPLOAD ================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#101D35]">
                Step 4: Upload Required Documents
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Upload a clear photo or scan of your South African ID document.
              </p>
            </div>

            {/* POPIA Privacy Badge */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <span className="font-bold block">Encrypted Document Upload (POPIA Compliant)</span>
                Your ID document is transmitted securely and stored in an encrypted vault exclusively for statutory CIPC verification. We never share or sell personal records.
              </div>
            </div>

            {/* Upload Area */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                South African ID Document / Smart Card <span className="text-[#FF702E]">*</span>
              </label>

              <div className="border-2 border-dashed border-slate-300 hover:border-[#FF702E] rounded-2xl p-6 sm:p-8 text-center transition-colors bg-slate-50/50">
                <input
                  type="file"
                  id="id-file-upload"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <label htmlFor="id-file-upload" className="cursor-pointer space-y-3 block">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF702E] flex items-center justify-center mx-auto">
                    {fileUploading ? (
                      <div className="w-5 h-5 border-2 border-[#FF702E] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Upload className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <span className="text-sm font-bold text-[#101D35] hover:text-[#FF702E]">
                      {fileUploading ? 'Uploading & Encrypting...' : 'Click to upload or take a photo'}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Accepts Green Barcoded ID, Smart Card (front/back), or Passport (PDF, JPG, PNG up to 10MB)
                    </p>
                  </div>
                </label>
              </div>

              {/* Upload Success Badge */}
              {formData.idDocumentName && (
                <div className="bg-white p-3.5 rounded-xl border border-emerald-300 flex items-center justify-between text-xs text-slate-800 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="font-bold">{formData.idDocumentName}</span>
                      <span className="text-slate-500 ml-2">({formData.idDocumentSize})</span>
                    </div>
                  </div>
                  <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              )}

              {errors.idDocument && (
                <p className="text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.idDocument}</span>
                </p>
              )}
            </div>

            {/* Quick Tips */}
            <div className="bg-[#F1F3F6] p-4 rounded-xl text-xs text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-800">Tips for fast CIPC approval:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-[11px]">
                <li>Ensure all four corners of your ID document are clearly visible without flash glare.</li>
                <li>Your name, photo, and 13-digit ID number must be legible.</li>
                <li>Smart ID cards should ideally show both front and back.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ================= STEP 5: REVIEW & PAYMENT ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-[#101D35]">
                Step 5: Review & 50% Deposit Payment
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Verify your details and pay your 50% deposit to initiate CIPC incorporation.
              </p>
            </div>

            {/* Order Summary Card */}
            <div className="bg-[#101D35] text-white p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-xs text-[#FF702E] font-bold uppercase tracking-wider">
                    Registration Package
                  </span>
                  <h3 className="text-lg font-bold text-white">{selectedPackage.name} Package</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-300">Total Price</span>
                  <p className="text-xl font-extrabold text-white">R{selectedPackage.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Proposed Company Name:</span>
                  <strong className="text-white">{formData.proposedName1} (Pty) Ltd</strong>
                </div>
                <div className="flex justify-between">
                  <span>Director / Applicant:</span>
                  <strong className="text-white">{formData.fullName} ({formData.idNumber})</strong>
                </div>
                <div className="flex justify-between">
                  <span>Contact WhatsApp:</span>
                  <strong className="text-white">{formData.whatsappNumber || formData.phoneNumber}</strong>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-2">
                <div className="flex justify-between text-sm font-bold text-[#FF702E]">
                  <span>50% Initial Deposit Payable Now:</span>
                  <span className="text-lg">R{depositAmount.toLocaleString()} ZAR</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Outstanding Balance (Due upon final COR14.3 delivery):</span>
                  <span>R{balanceAmount.toLocaleString()} ZAR</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Choose Payment Method for Deposit <span className="text-[#FF702E]">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'payfast' })}
                  className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'payfast'
                      ? 'border-[#FF702E] bg-orange-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-[#FF702E]" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">PayFast Secure</p>
                      <p className="text-[11px] text-slate-500">Credit / Debit Card</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'payfast'}
                    onChange={() => {}}
                    className="text-[#FF702E] focus:ring-[#FF702E]"
                  />
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'instant_eft' })}
                  className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'instant_eft'
                      ? 'border-[#FF702E] bg-orange-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Instant EFT</p>
                      <p className="text-[11px] text-slate-500">Capitec, FNB, Standard, Absa, Nedbank</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'instant_eft'}
                    onChange={() => {}}
                    className="text-[#FF702E] focus:ring-[#FF702E]"
                  />
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'capitec_pay' })}
                  className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'capitec_pay'
                      ? 'border-[#FF702E] bg-orange-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Capitec Pay / SnapScan</p>
                      <p className="text-[11px] text-slate-500">1-click mobile approval</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'capitec_pay'}
                    onChange={() => {}}
                    className="text-[#FF702E] focus:ring-[#FF702E]"
                  />
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'ewallet' })}
                  className={`p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'ewallet'
                      ? 'border-[#FF702E] bg-orange-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Approved E-Wallet</p>
                      <p className="text-[11px] text-slate-500">TymeBank / VodaPay / MoMo</p>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === 'ewallet'}
                    onChange={() => {}}
                    className="text-[#FF702E] focus:ring-[#FF702E]"
                  />
                </label>
              </div>
            </div>

            {/* Legal & Consent Checkboxes */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="w-4 h-4 text-[#FF702E] rounded border-slate-300 focus:ring-[#FF702E] mt-0.5"
                />
                <span>
                  I accept the{' '}
                  <button
                    type="button"
                    onClick={() => onOpenLegal('terms')}
                    className="text-[#FF702E] font-medium underline"
                  >
                    Terms and Conditions
                  </button>{' '}
                  and acknowledge that RegiSpark is an independent registration assistance service facilitating my CIPC lodgment.
                </span>
              </label>
              {errors.terms && <p className="text-xs text-rose-600">{errors.terms}</p>}

              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={formData.popiaConsent}
                  onChange={(e) => setFormData({ ...formData, popiaConsent: e.target.checked })}
                  className="w-4 h-4 text-[#FF702E] rounded border-slate-300 focus:ring-[#FF702E] mt-0.5"
                />
                <span>
                  I grant consent under the Protection of Personal Information Act (POPIA) for RegiSpark to process my identification details solely for company registration and statutory verification.
                </span>
              </label>
              {errors.popia && <p className="text-xs text-rose-600">{errors.popia}</p>}
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="group w-full py-4 pl-6 pr-3 text-base font-bold text-white bg-[#FF702E] hover:bg-[#F64B29] rounded-full shadow-xl shadow-[#FF702E]/25 transition-all flex items-center justify-between disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3 w-full">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Deposit & Lodging Application...</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-white/80" />
                      <span>Pay Deposit (R{depositAmount.toLocaleString()}) & Submit</span>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                256-bit encrypted transaction · Official CIPC reference dispatched upon verification
              </p>
            </div>
          </div>
        )}

        {/* STEP BUTTONS */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 text-xs font-bold text-white bg-[#101D35] hover:bg-[#1a2d4f] rounded-full transition-colors shadow-md ml-auto"
            >
              <span>Continue to Step {currentStep + 1}</span>
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-[#FF702E]" />
              </span>
            </button>
          )}
        </div>

      </div>

      {/* Assistance callout */}
      <div className="bg-[#F1F3F6] p-4 rounded-2xl flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span>Need help filling this in? We're available on WhatsApp.</span>
        </div>
        <a
          href={REGISPARK_CONFIG.getWhatsAppUrl('Hello RegiSpark, I am currently on the application form and need assistance with my submission.')}
          target="_blank"
          rel="noreferrer"
          className="text-[#FF702E] font-bold hover:underline"
        >
          Chat with Us →
        </a>
      </div>

    </div>
  );
};
