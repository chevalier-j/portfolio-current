/*
 * path: /src/constants/index.js
 */
/* eslint-disable import/no-relative-parent-imports */
// for convenience, I'm using these constants to make easy changes to content throghout the app
import {
  c,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  photocomp,
  chatkra,
  threejs,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

// export const hero = [
// 	{
// 		title: "Hi, I'm Alexander",
// 		subtitle: 'Software Engineer',
// 	},
// ]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "iOS Mobile Developer",
    icon: mobile,
  },
  {
    title: "UX & Design",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Necta",
    icon: c,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Oct 2023",
    points: [
      "Led React, TypeScript, and Bootstrap front-end development, crafting dynamic and user-friendly web applications.",
      "Leveraged AWS services, including EC2, S3, and Lambda functions, to enhance functionality and scalability.",
      "Designed and managed MySQL (MyRocksDB) databases, ensuring data integrity and performance optimisation.",
      "Collaborated with DevOps teams to understand requirements, offer technical insights, and optimise functionalities.",
      "Had a key role in troubleshooting and resolving technical issues across front-end and back-end systems.",
      "Maintained a strong commitment to Agile principles, consistently delivering results within tight deadlines.",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Givenchi Jeans",
    icon: c,
    iconBg: "#383E56",
    date: "Jan 2018 - Aug 2019",
    points: [
      "Designed and developed a dynamic website using HTML, CSS, and JavaScript to create an engaging user experience.",
      "Successfully integrated Shopify, enabling seamless e-commerce functionality and managing a 400+ item catalogue.",
      "Utilised CSS modules and Tailwind to efficiently style website content, ensuring consistent design and layout.",
      "Created wireframes and mockups using Adobe XD, facilitating effective design planning and team collaboration.",
      "Enforced security protocols, including data encryption, validation, and authentication, to protect against threats.",
      "Implemented interactive forms integrated with external APIs, enabling real-time data exchange.",
      "Enhanced SEO performance by applying best practices, optimising meta tags, headings, and content.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "PCRage S.A",
    icon: c,
    iconBg: "#E6DEDD",
    date: "Dec 2014 - Sep 2017",
    points: [
      "Enhanced CMS functionality using Laravel (PHP), improving content management and user experience through custom features and modules.",
      "Implemented and maintained MediaWiki (PHP), creating user-friendly documentation for clients, technicians, and software solutions, including guides, FAQs, and troubleshooting manuals.",
      "Actively engaged in weekly reviews, offering constructive feedback to improve processes, maintainability, and adherence to best practices.",
      "Supported IT security initiatives by identifying and addressing potential security risks in software systems.",
      "Tailored PC builds to meet the unique preferences of gaming enthusiasts, ensuring top-tier performance.",
      "Efficiently handled and resolved service requests and tickets, ensuring timely resolution of client issues and technical concerns to maintain high customer satisfaction levels.",
      "Assisted clients with network setup, troubleshooting, LAN/WAN configuration, router/switch maintenance.",
    ],
  },
  {
    title: "Junior IT Technician",
    company_name: "TechnologyWise",
    icon: c,
    iconBg: "#E6DEDD",
    date: "Oct 2013 - Oct 2014",
    points: [
      "Assisted in network configuration, including setting up VLANs, managing switches, and ensuring network security.",
      "Created and updated technical documentation, including system configurations, troubleshooting guides, and knowledge base articles.",
      "Supported IT security initiatives by identifying and addressing potential security risks in software systems.",
      "Established strong customer relationships and delivered exceptional on-site and remote technical support.",
      "Efficiently handled and resolved service requests and tickets, ensuring timely resolution of client issues and technical concerns to maintain high customer satisfaction levels.",
      "Collaborated with cross-functional teams to ensure seamless communication and coordination of IT solutions.",
      "Proactively improved documentation and support ticket management, enhancing overall team productivity.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "ChatKra",
    description:
      "Innovative chat application empowering multiple users to connect and communicate seamlessly in real-time. Enjoy an immersive chat experience with stunning UI, effortless message exchanges, and secure data management, fostering efficient and interactive conversations.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "chakra",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatkra,
    source: "https://github.com/",
  },
  {
    name: "Photocomp",
    description:
      "Introducing a dynamic photography competition platform that enables users to showcase their talent through photo uploads. Participants can actively engage in a fair voting system to rank and select the most captivating images. Enjoy a seamless experience with easy photo submission and real-time updates on top-ranked masterpieces.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: photocomp,
    source: "https://github.com/gibert-j/laravel_photocomp",
  },
  {
    name: "Splitmate",
    description:
      "My app lets you effortlessly split bills among friends. Add the bill amount, number of people, and optional tip percentage. Easily select contacts to send email or text SMS with banking details for quick and hassle-free transfers. Streamlining your group payments, it`s the perfect tool to simplify your social outings.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "swiftui",
        color: "pink-text-gradient",
      },
    ],
    image: c,
    source: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
