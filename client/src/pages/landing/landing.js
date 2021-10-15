import React from 'react';

import LandingNav from '../../components/landingNav';
import LandingHero from '../../components/LandingHero';
import VideoTop from '../../components/VideoTop';
import InfoSection from '../../components/InfoSection';
import InfoCards from '../../components/InfoCards';
import Hermits from '../../components/Hermits';
import InfoTwo from '../../components/InfoTwo';
import VideoTwo from '../../components/VideoTwo';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <VideoTop />
      <InfoSection />
      <InfoCards />
      <Hermits />
      <InfoTwo />
      <VideoTwo />
      <Footer />
    </div>
  );
};

export default Landing;