import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
type NavigationHandler = (page: 'home' | 'careers', sectionId?: string) => void;
import { MentorshipFormats } from './components/MentorshipFormats';
import { LearningTracks } from './components/LearningTracks';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Opportunities } from './components/Opportunities';
import { TechnologySection } from './components/TechnologySection';
import { WhatWeDoDifferently } from './components/WhatWeDoDifferently';
import { WhoItsFor } from './components/WhoItsFor';
import { CareerPage } from './pages/CareerPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'careers'>('home');

  // Simple navigation handler
  const handleNavigate: NavigationHandler = (page, sectionId) => {
    setCurrentPage(page);
    
    // If navigating to a section on the home page
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100); // Small delay to allow render
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <div id="home"><HeroSection /></div>
            <div id="features"><FeaturesSection /></div>
            <div id="how-it-works"><HowItWorks /></div>
            <WhatWeDoDifferently />
            <WhoItsFor />
            <div id="learning-tracks"><LearningTracks /></div>
            <MentorshipFormats />
            <TechnologySection />
            <div id="opportunities">
                <Opportunities onNavigate={handleNavigate} />
            </div>
            <TeamSection />
            <div id="pricing"><CTASection /></div>
          </>
        ) : (
          <CareerPage />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;