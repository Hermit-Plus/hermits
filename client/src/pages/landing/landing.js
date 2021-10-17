import React from 'react';

import LandingNav from '../../components/landingNav';
import LandingHero from '../../components/landingHero';
import VideoTop from '../../components/landingVideoTop';
import LandingInfo from '../../components/landingInfo';
// import Hermits from '../../components/Hermits';
// import InfoTwo from '../../components/InfoTwo';
// import VideoTwo from '../../components/VideoTwo';
// import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <div>
      <LandingNav />
      <LandingHero />
      <VideoTop />
      <LandingInfo />
      {/* <Hermits />
      <InfoTwo />
      <VideoTwo />
      <Footer /> */}
    </div>
  );
};

export default Landing;
