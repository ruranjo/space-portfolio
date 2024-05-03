import React from "react";
import {  IconAvatar, IconCursor, IconServer, IconUi, PlanetPic } from "../../utils/assets";
import { BackgroundStars } from "../BackgroundStars";



//style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgStars})`}}
 const AboutSection:React.FC<{}> = () => {
  return (
    <section className="relative rounded-lg p-8  mt-32 mx-4 sm:mx-10 bg-secondary sm:p-18 border-[5px] border-secondary z-10" id="about" 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`}}
    >
      <BackgroundStars isAbsolute={true} />
      
      <h2 className="text-3xl font-medium text-textColor font-changa tracking-wider uppercase">About</h2>
      
      <div className="flex flex-col items-center mt-10  sm:mt-0  lg:flex-row relative">
        
        <div>
          <div className="animate-float absolute w-[200px] h-[200px] p-8 " style={{
              backgroundImage: ` url(${PlanetPic})`,
              backgroundSize: 'cover',  // Esto asegura que la imagen cubra completamente el área del div sin repetirse
              backgroundRepeat: 'no-repeat',  // Evita que la imagen se repita
              backgroundPosition: 'center'  // Centra la imagen en el div
          }}>
          
          
          </div>
          <div className="flex items-center justify-center w-[200px] h-[200px] m-4  ">
            <img
              src={IconAvatar}
              alt="Me sitting with a laptop"
              className={' w-[180px]  border-b-[8px] border-textColor rounded-lg z-50'}
            />
          </div>
        </div>
        <ul className="text-primary flex flex-col items-center gap-2 sm:gap-12 sm:mt-0 p-8">
          <li className={"aboutItem  flex flex-col  md:flex-row items-center rounded-full list-none p-6 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%] sm:p-0 z-50"}>
            <img src={IconCursor} alt="Cursor icon" />
            <div className="w-full">
            <h3 className="text-xl font-normal font-changa " >Frontend Developer</h3>
            <p className=" font-poppins text-lg sm:text-xl ">
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={"aboutItem flex flex-col md:flex-row  items-center rounded-full list-none p-6 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%] sm:p-0 z-50"}>
            <img src={IconServer} alt="Server icon" />
            <div className={'styles.aboutItemText'}>
              <h3 className="text-xl font-normal font-changa" >Backend Developer</h3>
              <p className=" font-poppins text-xl">
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={"aboutItem flex flex-col md:flex-row  items-center rounded-full list-none p-6 bg-gradient-to-r from-[rgba(165,215,232,0.42)] to-[rgba(255,255,255,0)] bg-[length:0_100%] bg-no-repeat transition-all duration-400 hover:bg-[length:100%_100%] sm:p-0 z-50"}>
            <img src={IconUi} alt="UI icon" />
            <div className={'styles.aboutItemText'}>
            <h3 className="text-xl font-normal font-changa" >UI Designer</h3>
            <p className=" font-poppins text-xl">
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection