
// ICONS
import { FaGraduationCap, FaUniversity, FaAward, FaMedal, FaCertificate } from 'react-icons/fa';
import { BiLaptop, BiCodeAlt } from 'react-icons/bi';



export const educationData = [
        {
            id: 1,
            degree: "Diploma in Accounting Science",
            institution: "University of South Africa",
            period: "2024 - Current",
            location: "South Africa",
            description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization Techniques. GPA: 3.92/4.0",
            courses: ["Advanced Algorithms", "Machine Learning", "Neural Networks", "Computer Vision", "NLP"],
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            degree: "National Senior Certicate",
            institution: "N'wanati High School",
            period: "2014 - 2018",
            location: "South Africa, Limpopo",
            description: "Focused on software development and computer architecture. Participated in multiple hackathons and led programming club. Dean's List all semesters. GPA: 3.87/4.0",
            courses: ["Data Structures", "Operating Systems", "Database Systems", "Web Development", "Software Engineering"],
            icon: <FaUniversity />
        }
    ];


export const certificateData = [
        {
            id: 1,
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "March 2023",
            icon: <FaAward />,
            color: "#FF9900"
        },
        {
            id: 2,
            title: "Google Cloud Professional Engineer",
            issuer: "Google",
            date: "November 2022",
            icon: <FaCertificate />,
            color: "#4285F4"
        },
        {
            id: 3,
            title: "Microsoft Azure Developer Associate",
            issuer: "Microsoft",
            date: "July 2022",
            icon: <FaMedal />,
            color: "#0078D4"
        },
        {
            id: 4,
            title: "TensorFlow Developer Certificate",
            issuer: "Google",
            date: "May 2022",
            icon: <BiCodeAlt />,
            color: "#FF6F00"
        },
        {
            id: 5,
            title: "Full Stack Web Development",
            issuer: "Udacity",
            date: "January 2022",
            icon: <BiLaptop />,
            color: "#01B3E3"
        },
        {
            id: 6,
            title: "Deep Learning Specialization",
            issuer: "Coursera",
            date: "October 2021",
            icon: <FaAward />,
            color: "#2A73CC"
        }
    ];