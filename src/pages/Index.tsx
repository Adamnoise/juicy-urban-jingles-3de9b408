
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MatchSelectionSection from '../components/match-selection/MatchSelectionSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import TopPredictions from '../components/TopPredictions';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="match-selection">
          <MatchSelectionSection />
        </section>
        <section id="leaderboard" className="py-20">
          <LeaderboardTable />
        </section>
        <section id="predictions">
          <TopPredictions />
        </section>
        <section id="call-to-action">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
