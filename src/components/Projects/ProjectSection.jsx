"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import details from "@/pages/details";
import ValorImg from '../../../public/Valor_Portal_Image_new_1.png'
// import SlatBooking from '../../../public/'

console.log('ValorImg ==>>',ValorImg)

const projectsData = [
  {
    id: 1,
    title: "VIRTUAL TERMINAL",
    description: "Project Details",
    image: ValorImg?.src,
    tag: ["All", "Web"],
    gitUrl: "/",
    // previewUrl: "https://app.1touchglobal.ai/dashboard",
    technologyStack: {
      frontend: "React js , Material UI",
      backend: "Node.js",
      database: "Sql",
      project_title : 'VIRTUAL TERMINAL',
      project_details : 'The Friend-to-Friend Product Purchasing System aims to facilitate the process of buying products for friends who are located in different places. If you are away from your current location but wish to buy a product from a local store, you can have your friend purchase it on your behalf. The shopkeeper will then send the payment link to your designated WhatsApp number or email, allowing you to make the payment securely and conveniently.'
    },
  },
  {
    id: 2,
    title: "Slot booking",
    description: "Project Details",
    image: "/SlotBooking.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://1touchglobal-admin-ui.vercel.app/",
    technologyStack: {
      frontend: "React.js,Tailwind Css",
      backend: "Node.js",
      database: "MongoDB",
      // Api: "GraphQL",
      project_title : 'EMPLOYE SLOT BOOKING',
      project_details : 'Welcome to the Student Education Tracking System, a comprehensive platform designed to monitor and manage student progress and academic performance. Whether you are an educator, administrator, or parent, our system provides the tools you need to support student learning and achievement effectively.'
    
    },
  },
  {
    id: 3,
    title: "Smartdx",
    description: "Project Details",
    image: "/SMARTDX.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ommniverse.ai/",
    technologyStack: {
      frontend: "Next.js,Tailwind CSS,React js",
      backend: "Node.js",
      database: "MongoDB",
      // other: "GraphQL",
      project_title : 'SmartDX',
      project_details : 'SmartDX is an innovative platform designed to streamline communication by enabling seamless notification delivery to websites and apps. Its primary purpose is to allow businesses to send targeted communications effortlessly.For example, if an e-commerce platform like Flipkart integrates with SmartDX, businesses can send notifications directly to the Flipkart website or app. These notifications could include updates, promotions, alerts, or transactional messages, ensuring efficient communication with users.SmartDX simplifies the process of integrating and managing notifications across multiple platforms, making it a powerful tool for businesses to stay connected with their audiences.'
    },
  },
  // {
  //   id: 4,
  //   title: "Shekel Traders",
  //   description: "Project Details",
  //   image: "/skehel.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "https://www.shekeltrader.com/",
  //   technologyStack: {
  //     frontend: "Next.js, Tailwind CSS"
  //   },
  // },
  // {
  //   id: 5,
  //   title: "Score11 Admin",
  //   description: "Project Details",
  //   image: "/score11.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "https://admin.score11.io/",
  //   technologyStack: {
  //     frontend: "Next.js, Tailwind CSS",
  //     backend: "Node.js",
  //     database: "MongoDB",
  //     Api: "GraphQL",
  //   },
  // },
  // {
  //   id: 6,
  //   title: "Worktual",
  //   description: "Project Details",
  //   image: "/worktual.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "https://worktual.co.uk/",
  //   technologyStack: {
  //     frontend: "React js,Tailwind CSS,Bootstrap",
  //     backend: "Node.js",
  //     database: "Sql",
  //     Api: "Rest api"
  //   },
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
     <section id="project" className="bg-custom-gradient -scroll-mt-20">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440  290">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>

      </svg>
      <h2 data-aos="fade-up" className="text-center text-5xl font-bold font-poppins text-[#fff] mt-0 mb-8 md:mb-2">
        Latest work
      </h2>
      <div data-aos="fade-up" className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8  md:gap-12 mx-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            technologyStack={project.technologyStack}
          />
        ))} 
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>

      </svg>
    </section>
  );
};

export default ProjectsSection;
