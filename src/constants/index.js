import {
  cloudnuro,
  resonar,
  highradius,
  c,
  javascript,
  java,
  html,
  css,
  reactjs,
  vuejs,
  golang,
  nodejs,
  python,
  sql,
  postsql,
  graphql,
  typescript,
  github,
  git,
  lambda,
  amplify,
  apigateway,
  fullstack,
  reactnative
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.JS Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: reactnative,
  },
  {
    title: "Vue.JS Developer",
    icon: vuejs,
  },
  {
    title: "Full-Stack Developer",
    icon: fullstack,
  },
];
const experiences = [
  {
    title: "Software Engineer",
    company_name: "CLOUDNURO.AI",
    icon: cloudnuro,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Engineered an AI-based recommendation system to assist users in scaling their VMs or databases on AWS or Azure, effectively reducing costs and optimizing resource utilization by 60%.",
      "Developed SaaS apps adapters to extract and analyze user insights, including license purchases, usage, dormant user metrics, manager information, license tier, and potential savings.",
      "Designed a ticketing system with React, Redux, and Golang, boosting user experience and cutting resolution time by 85%.",
      "Developed Ticketing System for Client Application",
      "Developed Secured Login System for Employees using GCP Credential Manager.",
      "Browser Plugin for User Insights and Behaviour Data on SaaS Applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Administrator",
    company_name: "RESONAR AUTOMATION",
    icon: resonar,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Developed an IoT based Home Automation Device using AWS IoT service and ESP-32 micro-controller.",
      "Research and Development Team Lead.",
      "Robust Messaging System for IoT devices",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "HIGHRADIUS CORPORATION",
    icon: highradius,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Developed an AI-based platform where businesses can predict the payout of the receipt that is created.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const skills = [
  {
    name: "Web Development",
    tech: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
      {
        name: "React.JS",
        logo: reactjs,
      },
      {
        name: "Vue.JS",
        logo: vuejs,
      },
      {
        name: "Golang",
        logo: golang,
      },
      {
        name: "Node.JS",
        logo: nodejs,
      },
    ],
  },
  {
    name: "Languages",
    tech: [
      {
        name: "C++",
        logo: c,
      },
      {
        name: "Java",
        logo: java,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "SQL",
        logo: sql,
      },
      {
        name: "PostSQL",
        logo: postsql,
      },
      {
        name: "GraphQL",
        logo: graphql,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "TypeScript",
        logo: typescript,
      },
    ],
  },
  {
    name: "Tools",
    tech: [
      {
        name: "AWS Lambda Functions",
        logo: lambda,
      },
      {
        name: "AWS Amplify",
        logo: amplify,
      },

      {
        name: "AWS API Gateway",
        logo: apigateway,
      },
      {
        name: "Git",
        logo: git,
      },
      {
        name: "GitHub",
        logo: github,
      },
      // {
      //   name: "RDBMS",
      //   logo: rdbms,
      // },
    ],
  },
];

export { services, experiences, skills };
