import React, { useEffect } from 'react'
import { dataPortfolio } from '../../utils/data'
import { PortfolioCard } from '../../components/PortfolioCard'

const PortfolioPage:React.FC<{}> = ({}) => {

  useEffect(() => {
    document.title = "SOFIA MILLER | Portfolio";
  }, []);

  return (
    <div className="flex flex-col justify-center h-full my-16 mx-4 md:my-12 ">
        <h1 className="text-2xl leading-tight text-center font-poppins md:text-4xl md:mb-5">Mis últimos <span className="font-normal font-changa text-textColor">trabajos realizados</span></h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 ">
            {dataPortfolio.map((data) => (
                <PortfolioCard key={data.id} id={data.id} image={data.image} title={data.title} urlDemo={data.urlDemo}  urlGithub={data.urlGithub} />
            ))}
        </div>
    </div>
  )
}

export default PortfolioPage