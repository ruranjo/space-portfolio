import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const NotFoundPage:React.FC<{}> = () => {
  useEffect(() => {
    document.title = "jose-luis | notfound";
  }, []);

  return (
    
        <div className="w-[100%] h-[40%] flex flex-col gap-2 sm:w-[45%]  my-24">
            <div className='flex justify-between  '>
              <h2 className="text-center  text-3xl font-black text-primary tracking-wider">404</h2>
            </div>
            <div className='flex justify-between  '>
              <h2 className="text-center  text-xl font-black text-primary tracking-wider">Page not found :(</h2>
            </div>
            <p className='text-xl'>
            It's okay, you can try again! However, if you prefer not to, you can watch a <a className='text-textColor font-changa ' href='https://youtu.be/7Z8cwhfjlMw'>space dog song</a>. to improve your day :D
            </p>
            <div className='w-[100%]  mt-4 flex justify-start gap-2'>
                <Link  to={"/"} className={`button  p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01] `}>
                    Return home
                </Link>
            </div>
        </div>
 
  )
}

export default NotFoundPage