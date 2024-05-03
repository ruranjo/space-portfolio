import React, { useEffect } from 'react';
import { AboutSection, ExperienceSection, VideoSection } from '../../components';

const AboutPage: React.FC<{}> = () => {

  useEffect(() => {
    document.title = "SOFIA MILLER | about";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <AboutSection />
      <ExperienceSection  />
      <VideoSection />
    </div>
  );
}

export default AboutPage;