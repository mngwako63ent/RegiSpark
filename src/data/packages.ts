import { RegistrationPackage } from '../types';

export const PACKAGES: RegistrationPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 999,
    description: 'Everything you need to officially register your company.',
    depositPercentage: 50,
    turnaroundDays: '3–5 business days',
    bestFor: 'First-time founders and freelancers wanting a clean, compliant Pty Ltd registration.',
    inclusions: [
      'CIPC Pty Ltd company registration',
      'Assistance with the registration process',
      'Digital delivery of registration documents (COR14.3 & MOI)',
      'WhatsApp and email support',
    ],
    additionalHighlights: [
      'Official COR14.3 Registration Certificate',
      'Standard Memorandum of Incorporation (MOI)',
      'Name reservation submission to CIPC',
      'Electronic filing handling',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 1499,
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'Register your company and get additional essential business documentation.',
    depositPercentage: 50,
    turnaroundDays: '3–5 business days',
    bestFor: 'Entrepreneurs ready to open corporate bank accounts, invoice clients, and tender.',
    inclusions: [
      'Everything in Starter',
      'SARS registration / tax number assistance',
      'B-BBEE affidavit assistance',
      'Digital delivery of completed documents',
      'WhatsApp and email support',
    ],
    additionalHighlights: [
      'Everything included in the Starter package',
      'SARS Corporate Income Tax Number application support',
      'B-BBEE Exempt Micro Enterprise (EME) sworn affidavit',
      'Share certificates for company directors/shareholders',
      'Bank-ready compliance documentation pack',
    ],
  },
  {
    id: 'boss',
    name: 'Boss',
    price: 2999,
    badge: 'COMPLETE BUSINESS STARTER',
    description: 'Take your business further with registration, branding and your own website.',
    depositPercentage: 50,
    turnaroundDays: '5–7 business days',
    bestFor: 'Ambitious businesses looking to establish an immediate market presence and brand.',
    inclusions: [
      'Everything in Plus',
      'Professional business logo',
      'One-page business website',
      'Digital delivery of registration documents',
      'WhatsApp and email support',
    ],
    additionalHighlights: [
      'Complete CIPC, SARS tax number & B-BBEE documentation',
      'Custom vector business logo design (3 concepts, 2 revision rounds)',
      'High-resolution logo files (PNG, SVG, PDF, social media kit)',
      'Custom responsive one-page landing page website for your business',
      'Priority WhatsApp onboarding and dedicated project support',
    ],
  },
];

export interface FeatureComparisonRow {
  feature: string;
  category: string;
  starter: boolean | string;
  plus: boolean | string;
  boss: boolean | string;
  tooltip?: string;
}

export const COMPARISON_FEATURES: FeatureComparisonRow[] = [
  {
    category: 'Legal Registration & CIPC',
    feature: 'CIPC Company Name Reservation (COR9.4)',
    starter: true,
    plus: true,
    boss: true,
  },
  {
    category: 'Legal Registration & CIPC',
    feature: 'Official COR14.3 Registration Certificate',
    starter: true,
    plus: true,
    boss: true,
  },
  {
    category: 'Legal Registration & CIPC',
    feature: 'Standard Memorandum of Incorporation (MOI COR15.1A)',
    starter: true,
    plus: true,
    boss: true,
  },
  {
    category: 'Legal Registration & CIPC',
    feature: 'Official Director Appointments (up to 3 directors)',
    starter: true,
    plus: true,
    boss: true,
  },
  {
    category: 'Legal Registration & CIPC',
    feature: 'Share Certificates for Shareholders',
    starter: 'Basic template',
    plus: true,
    boss: true,
  },
  {
    category: 'Tax & Compliance',
    feature: 'SARS Corporate Income Tax Number Assistance',
    starter: false,
    plus: true,
    boss: true,
    tooltip: 'Assistance generating your official SARS income tax verification notice.',
  },
  {
    category: 'Tax & Compliance',
    feature: 'B-BBEE Sworn Affidavit Assistance (EME Level 1/2)',
    starter: false,
    plus: true,
    boss: true,
    tooltip: 'Required for corporate supply chain, bank tenders, and enterprise contracts.',
  },
  {
    category: 'Branding & Digital Presence',
    feature: 'Custom Professional Business Logo Design',
    starter: false,
    plus: false,
    boss: true,
    tooltip: '3 unique concepts tailored to your industry with full vector exports.',
  },
  {
    category: 'Branding & Digital Presence',
    feature: 'One-Page Mobile-Responsive Business Website',
    starter: false,
    plus: false,
    boss: true,
    tooltip: 'Modern fast landing page showcasing your services and contact details.',
  },
  {
    category: 'Support & Delivery',
    feature: 'Estimated Turnaround',
    starter: '3–5 days',
    plus: '3–5 days',
    boss: '5–7 days',
  },
  {
    category: 'Support & Delivery',
    feature: 'Digital Document Delivery via WhatsApp & Email',
    starter: true,
    plus: true,
    boss: true,
  },
  {
    category: 'Support & Delivery',
    feature: 'WhatsApp Chat Support',
    starter: true,
    plus: true,
    boss: 'Priority',
  },
];
