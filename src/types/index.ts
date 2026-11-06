export type PackageId = 'starter' | 'plus' | 'boss';

export interface RegistrationPackage {
  id: PackageId;
  name: string;
  price: number; // in ZAR
  badge?: string;
  isPopular?: boolean;
  description: string;
  depositPercentage: number; // default 50%
  inclusions: string[];
  additionalHighlights: string[];
  turnaroundDays: string;
  bestFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'packages' | 'documents' | 'payment';
}

export interface ApplicationFormData {
  // Package
  packageId: PackageId;
  
  // Personal Info
  fullName: string;
  idNumber: string; // SA 13-digit ID
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  
  // Company Info
  proposedName1: string;
  proposedName2: string;
  industry: string;
  businessDescription: string;
  province: string;
  businessAddress: string;
  
  // Documents
  idDocumentName?: string;
  idDocumentSize?: string;
  proofOfAddressName?: string;
  
  // Payment
  paymentMethod: 'payfast' | 'instant_eft' | 'capitec_pay' | 'snapscan' | 'ewallet';
  depositAmount: number;
  totalAmount: number;
  balanceAmount: number;
  termsAccepted: boolean;
  popiaConsent: boolean;
}

export interface ApplicationRecord {
  referenceNumber: string;
  submittedAt: string;
  formData: ApplicationFormData;
  status: 'deposit_received' | 'name_reservation' | 'cipc_submission' | 'approved' | 'documents_delivered';
  estimatedCompletion: string;
}
