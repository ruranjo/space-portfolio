import React, { useEffect } from 'react'

import { iconsList } from '../../utils/data';
import { BackgroundStars, IconLink } from '../../components';
import { HeroAstro } from '../../utils/assets';


const HomePage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "jose-luis | home";
  }, []);
  
  /*
  <div className="absolute inset-0 bg-fixed bg-no-repeat bg-cover -z-20" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgStars})`}} >

        </div>
  */

  return (
    <div className="flex  h-screen justify-center items-center  hoverselect ">
        <BackgroundStars />
        <div className='flex  justify-center items-center '>
            <div className='flex justify-center items-center w-[60%] '>
                <div className="gap-2  p-4 bg-opacity-80 bg-secondary z-50">
                    <div className='flex justify-between  '>
                        <h2 className="text-center text-3xl font-changa text-textColor tracking-wider">SOFIA MILLER <span className='text-lg italic'>( template made by ruranjo)</span></h2>
                    </div>
                    <p className='text-lg'>
                    Hello, I'm Sofia Miller (he/him), pursuing dual degrees in Computer
                    Engineering and Computer Science at <a className='link' href='#'>the University of Southern California</a>.
                    My passions lie in journalism, design, and engineering, driving me to explore how things work and to seek ways to improve them.
                    Thank you for visiting, and I hope you find your time here enjoyable!
                    </p>
                    
                    <div className='w-[100%]  flex justify-start gap-2 mt-2'>
                    {
                    iconsList.map((icon , index)=>{
                    return ( 
                        <IconLink active={false} icon={icon.icon} href={icon.address}  title={icon.name}  key={index} />
                    )
                    })
                    }
                    </div>
                </div>
            </div>
            <div className=' w-[40%] h-full flex  justify-center items-center pl-16 animated'>
                <img className='animate-float ' src={HeroAstro} alt="" />
            </div>
        </div>
        

    </div>
  )
}

export default HomePage