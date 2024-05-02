import { IconType } from "react-icons";
import { IconCss, IconEmail, IconFigma, IconGithub, IconGoogle, IconGraphql, IconHtml, IconLinkedin, IconMicrosoft, IconMongodb, IconNetflix, IconNode, IconReact, IconX, IconYoutube, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, video1, video2, video3, video4, video5, video6 } from "./assets";

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

  interface videosType {
    img:string;
    title:string
  }


  export const videos: videosType[] = [
    {
      img:video1,
      title:"Dashboard"
    },
    {
      img:video2,
      title:"StepForm"
    },
    {
      img:video3,
      title:"JobList"
    },
    {
      img:video4,
      title:"Accordion"
    },
    {
      img:video5,
      title:"OpinionSection"
    },
    {
      img:video6 ,
      title:"LandingPage"
    },
    
  ];

  export interface BlogType {
    title: string;
    date: string;
    description: string;
    id:string;
    tags:string[];
}


export const blogs: BlogType[] = [
  {
      title: "Developing with Docker in Boston",
      id: "developing-with-docker-boston",
      date: "August 13, 2023",
      description: "Exploring the use of Docker for scalable applications across Boston's tech startups, uncovering how local companies optimize their development workflows.",
      tags: ["devops", "docker", "Boston", "tech-culture", "programming"]
  },
  {
      title: "Agile Practices at Startup 222",
      id: "agile-practices-222",
      date: "August 1, 2023",
      description: "Adopting agile methodologies, Startup 222 accelerates its development cycle to enhance productivity and address market demands swiftly.",
      tags: ["web-dev", "agile", "innovation", "startup-culture"]
  },
  {
      title: "Advanced Algorithms at USC",
      id: "advanced-algorithms-usc",
      date: "May 15, 2023",
      description: "Delving into advanced algorithms and their applications in solving real-world problems with USC's computer science community.",
      tags: ["computer-science", "algorithms", "education", "USC", "programming"]
  },
  {
      title: "Evaluating New IDEs: Beyond the Hype",
      id: "evaluating-new-ides",
      date: "March 27, 2023",
      description: "A thorough analysis of emerging Integrated Development Environments (IDEs) to determine which tools truly enhance coding efficiency.",
      tags: ["web-dev", "software-tools", "programming", "tech-review"]
  },
  {
      title: "Navigating Open Source Contributions at USC",
      id: "open-source-usc",
      date: "December 29, 2022",
      description: "Engaging in open source projects during my first semester at USC, exploring how contributions to open source can be both educational and impactful.",
      tags: ["open-source", "tech-community", "college-programming", "USC"]
  },
  {
      title: "Exploring Quantum Computing in Washington D.C.",
      id: "quantum-computing-dc",
      date: "July 20, 2022",
      description: "A deep dive into the world of quantum computing with D.C.'s leading tech experts, discovering the potential impacts on data security and processing speeds.",
      tags: ["quantum-computing", "Washington-DC", "innovation", "education"]
  },
  {
      title: "Tech Startups Road Trip: Illinois Edition",
      id: "tech-road-trip-illinois",
      date: "June 8, 2022",
      description: "Touring Illinois to explore how regional tech startups are leveraging new technologies to disrupt traditional industries.",
      tags: ["road-trip", "startups", "tech-innovation", "Illinois"]
  },
  {
      title: "Inclusive Technologies in Taiwanese Tech",
      id: "inclusive-tech-taiwan",
      date: "August 18, 2021",
      description: "Exploring how inclusive technologies are being developed in Taiwan to support LGBTQ+ communities, featuring insights from industry leaders.",
      tags: ["diversity-in-tech", "inclusive-design", "Taiwan", "tech-for-good"]
  },
  {
      title: "HSCTF 8: Coding Challenges Decoded",
      id: "hsctf-8-coding-challenges",
      date: "June 20, 2021",
      description: "A comprehensive review of the coding challenges faced during HSCTF 8, analyzing problem-solving techniques and programming skills required.",
      tags: ["web-dev", "CTF", "programming-competition", "problem-solving"]
  },
  {
      title: "Exploring Sound Programming: Audio DSP with Python",
      id: "sound-programming-audio-dsp",
      date: "May 17, 2021",
      description: "Investigating the application of Python in audio digital signal processing, from synthesis to effects implementation.",
      tags: ["audio-programming", "Python", "DSP", "technology"]
  },
  {
      title: "picoCTF 2021 by Redpwn: Tactics and Techniques",
      id: "picoctf-2021-tactics",
      date: "May 11, 2021",
      description: "Reflecting on picoCTF 2021, this post examines various tactics and coding techniques that helped navigate through complex cybersecurity challenges.",
      tags: ["cybersecurity", "CTF", "educational", "programming-skills"]
  }
];

interface PortfolioBoxProps {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
}


export const dataPortfolio: PortfolioBoxProps[] = [
    {
        id: 1,
        title: "Web Pro",
        image: Image1,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: Image2,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: Image3,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: Image4,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: Image5,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: Image6,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: Image7,
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: Image8,
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

  /*
        
    }
  */