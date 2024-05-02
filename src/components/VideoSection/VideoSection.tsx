import React from 'react'
import { videos } from '../../utils/data'
import { IconYoutube } from '../../utils/assets'
import { IconLink } from '../IconLink'
import { BackgroundStars } from '../BackgroundStars'

/*
<section className="relative rounded-lg p-8 pr-0 mt-32  mx-10 bg-secondary md:p-18 border-[5px] border-secondary z-10" id="video" 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgStars})`}}
    >
</section>
*/

const VideoSection:React.FC<{}> = () => {
  return (
    <section className="relative flex justify-center rounded-lg p-4 my-16  mx-10 bg-secondary md:p-18 border-[5px] border-secondary z-10" id="video" 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`}}
    >
    <BackgroundStars isAbsolute={true} />
        <div className=' w-full bg-opacity-90 z-50'>
           <h2 className='text-center text text-2xl my-5 font-normal text-textColor tracking-wider font-changa'>VIDEOS OF MY CHANNEL</h2>
           <div className='flex flex-wrap justify-center items-center gap-8'>
                {videos.map((video, index) => {
                    return (
                        <div
                            className='w-[200px] h-[150px] flex justify-center items-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-opacity-50 '
                            key={index}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${video.img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        > 
                            <div className='text-center bg-secondary p-1 rounded-2xl w-[150px] bg-opacity-60'>
                                <IconLink 
                                    active={false} 
                                    icon={IconYoutube} 
                                    href={""} 
                                    title={video.title} 
                                    key={index}
                                    
                                />
                                <h3 className='text-textColor ' >{video.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    
    </section>
  )
}


export default VideoSection