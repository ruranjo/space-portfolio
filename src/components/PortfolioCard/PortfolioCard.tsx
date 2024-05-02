import React from "react"
import { IconLink } from "../IconLink"
import { IconDemo, IconGithub } from "../../utils/assets"


interface Props {
    
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
}

const PortfolioCard:React.FC<Props> = ({id, title, image, urlDemo, urlGithub}) => {
    
    

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl bg-secondary"
        >
            
            <h3 className="mb-4 text-base font-changa text-textColor">{title}</h3>
            <img
                src={image}
                alt="Image"
                className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            <div className="flex gap-5 mt-5">
                <IconLink active={false} icon={IconGithub} href={urlGithub}  title={"Github"}   />
                <IconLink active={false} icon={IconDemo} href={urlDemo}  title={"Demo"}   />
               
            </div>
        </div>
    );
}

export default PortfolioCard