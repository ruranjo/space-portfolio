import React, { useEffect } from 'react';
import { AboutSection, ExperienceSection } from '../../components';

const AboutPage: React.FC<{}> = () => {

  useEffect(() => {
    document.title = "jose-luis | about";
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <AboutSection />
      <ExperienceSection  />
    </div>
  );
}

export default AboutPage;