import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { LegalModal } from './components/LegalModal';
import { TrackStatusModal } from './components/TrackStatusModal';

import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { ApplicationPage } from './pages/ApplicationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('plus');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);

  // Sync hash or handle navigation
  const handleNavigate = (page: string, packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser hash changes if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'packages', 'how-it-works', 'about', 'faqs', 'contact', 'apply'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#ECEFF3] sm:py-4 sm:px-4 lg:py-6 lg:px-8 text-slate-900 selection:bg-[#FF702E]/20 selection:text-[#101D35]">
      
      {/* Outer Sculpted Canvas Card (Adaptive for all devices: seamless mobile + framed desktop) */}
      <div className="max-w-[1440px] mx-auto bg-white sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl sm:border border-slate-200/90 overflow-hidden flex flex-col min-h-screen sm:min-h-0">
        
        {/* Top Notched Navbar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenTracker={() => setIsTrackerOpen(true)}
        />

        {/* Main Page Content */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenTracker={() => setIsTrackerOpen(true)}
            />
          )}

          {currentPage === 'packages' && (
            <PackagesPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'how-it-works' && (
            <HowItWorksPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'faqs' && (
            <FaqPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'apply' && (
            <ApplicationPage
              initialPackageId={selectedPackageId}
              onNavigate={handleNavigate}
              onOpenLegal={(type) => setLegalModalType(type)}
              onOpenTracker={() => setIsTrackerOpen(true)}
            />
          )}
        </main>

        {/* Persistent Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenLegal={(type) => setLegalModalType(type)}
          onOpenTracker={() => setIsTrackerOpen(true)}
        />

      </div>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget currentPackageContext={selectedPackageId} />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Track Status Modal */}
      <TrackStatusModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />

    </div>
  );
}
