import React from 'react';

import LandingNav from '../../components/landingNav';
import LandingHero from '../../components/landingHero';
import VideoTop from '../../components/landingVideoTop';
import LandingInfo from '../../components/landingInfo';
import LandingHermits from '../../components/landingHermits';
import LandingInfoTwo from '../../components/landingInfoTwo';
// import VideoTwo from '../../components/VideoTwo';
import LandingFooter from '../../components/landingFooter';

const Landing = () => {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <VideoTop />
      <LandingInfo />
      <LandingHermits />
      <LandingInfoTwo />
      {/* <VideoTwo /> */}
      <LandingFooter />
    </>
  );
};

export default Landing;
