
import { BsBriefcase } from 'react-icons/bs';
import { HiCode } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { IoMdTrophy } from 'react-icons/io';

export const experienceData = [
        {
            id: 1,
            company: "TechNova Solutions",
            position: "Senior Frontend Developer",
            period: "Jan 2022 - Present",
            location: "San Francisco, CA",
            description: "Led development of modern web applications using React, TypeScript, and GraphQL. Implemented responsive designs and improved performance for 5+ client projects. Mentored junior developers and established code quality standards.",
            technologies: ["React", "TypeScript", "GraphQL", "Redux", "Tailwind CSS"],
            icon: <HiCode />
        },
        {
            id: 2,
            company: "DataViz Systems",
            position: "Full Stack Developer",
            period: "Mar 2019 - Dec 2021",
            location: "Austin, TX",
            description: "Developed end-to-end solutions for data visualization platforms. Built RESTful APIs using Node.js and Express. Created interactive dashboards with D3.js and React. Collaborated with UX designers to implement user-friendly interfaces.",
            technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "D3.js"],
            icon: <BsBriefcase />
        },
        {
            id: 3,
            company: "InnoTech Startup",
            position: "Frontend Developer",
            period: "Jun 2017 - Feb 2019",
            location: "Seattle, WA",
            description: "Developed and maintained company website and web applications. Implemented responsive designs and ensured cross-browser compatibility. Collaborated with backend developers to integrate frontend with APIs.",
            technologies: ["HTML/CSS", "JavaScript", "jQuery", "SASS", "Webpack"],
            icon: <RiTeamLine />
        },
        {
            id: 4,
            company: "CodeCraft Academy",
            position: "Junior Web Developer",
            period: "Jan 2016 - May 2017",
            location: "Portland, OR",
            description: "Built web applications for clients across various industries. Collaborated with design team to implement user interfaces. Participated in code reviews and improved development processes.",
            technologies: ["HTML/CSS", "JavaScript", "React", "Bootstrap"],
            icon: <IoMdTrophy />
        }
    ];