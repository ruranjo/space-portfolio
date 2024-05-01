import { IconType } from "react-icons";
import { IconCss, IconEmail, IconFigma, IconGithub, IconGoogle, IconGraphql, IconHtml, IconLinkedin, IconMicrosoft, IconMongodb, IconNetflix, IconNode, IconReact, IconX, IconYoutube } from "./assets";

export interface IconInfo {
    name: string;
    address: string;
    icon: IconType;
}

export const iconsList: IconInfo[] = [
    {
        name: "Email",
        address: "correo@eemplo.com",
        icon: IconEmail
    },
    {
        name: "Linkedin",
        address: "https://www.linkedin.com/in/tu-perfil",
        icon: IconLinkedin
    },
    {
        name: "X",
        address: "https://www.example.com",
        icon: IconX
    },
    {
        name: "Github",
        address: "https://github.com/tu-usuario",
        icon: IconGithub
    },
    {
        name: "Youtube",
        address: "https://www.youtube.com/c/tu-canal",
        icon: IconYoutube
    }
];


interface Skill {
    title: string;
    imageSrc: string;
  }
 
 

 export const skills: Skill[] = [
    {
      title: "HTML",
      imageSrc: IconHtml
    },
    {
      title: "CSS",
      imageSrc: IconCss
    },
    {
      title: "React",
      imageSrc: IconReact
    },
    {
      title: "Node",
      imageSrc: IconNode
    },
    {
      title: "GraphQL",
      imageSrc: IconGraphql, 
    },
    {
      title: "MongoDB",
      imageSrc: IconMongodb
    },
    {
      title: "Figma",
      imageSrc:  IconFigma, 
    }
  ];

  interface Experience {
    role: string;
    organisation: string;
    startDate: string;
    endDate: string;
    experiences: string[];
    imageSrc: string;
  }


 export const History: Experience[] = [
    {
      role: "Software Engineer",
      organisation: "Google",
      startDate: "Sept, 2022",
      endDate: "Present",
      experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
      imageSrc: IconGoogle
    },
    {
      role: "UI Designer",
      organisation: "Mirosoft", // Note: There is a typo in 'Microsoft', you might want to correct it.
      startDate: "Aug, 2021",
      endDate: "Aug, 2022",
      experiences: ["Worked on Windows 11", "Designed the control panel"],
      imageSrc: IconMicrosoft
    },
    {
      role: "SWE Intern",
      organisation: "Netflix",
      startDate: "Apr, 2020",
      endDate: "Jun, 2020",
      experiences: [
        "Worked on component library",
        "Helped create UI components"
      ],
      imageSrc: IconNetflix
    }
  ];