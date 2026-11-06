export const REGISPARK_CONFIG = {
  brandName: 'RegiSpark',
  tagline: 'Your Business Starts Here.',
  secondaryTagline: 'Register Your Company. Build Your Future.',
  website: 'https://regispark.co.za',
  
  // Real business contact information provided by user
  supportEmail: 'kgangboingotlo@gmail.com',
  infoEmail: 'kgangboingotlo@gmail.com',
  phoneDisplay: '068 592 5857',
  phoneInternational: '+27 68 592 5857',
  whatsappNumber: '27685925857', // Digits for official wa.me API link
  operatingHours: 'Monday – Friday: 08:30 – 17:00 SAST',
  operatingDays: 'Mon – Fri (Excl. Public Holidays)',
  physicalAddress: 'Johannesburg & Cape Town, South Africa (Digital Service Hub)',
  
  // Business logic
  defaultDepositPercentage: 50, // 50% deposit required upfront
  estimatedTurnaround: '3–5 business days',
  turnaroundDisclaimer: 'Typically completed within 3–5 business days, subject to CIPC system turnaround, document completeness and statutory processing requirements.',
  
  // Independent Service Disclaimer (as required by prompt & compliance)
  statutoryDisclaimer: 'RegiSpark is an independent digital business registration facilitation service. We are not CIPC (Companies and Intellectual Property Commission) or SARS (South African Revenue Service), nor do we claim official statutory government affiliation. We assist aspiring entrepreneurs by handling paperwork preparation, electronic filing, and compliance follow-ups on their behalf.',
  
  // Social & Chat URLs
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = 'Hello RegiSpark, I would like assistance with registering my Pty Ltd company.';
    const encoded = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/27685925857?text=${encoded}`;
  }
};
