import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Hotel Api",
      des: "A secured Web Api for hotels",
      projectlink: "#",
      techused: [
        {
          techname: "ASP.Net Core Web Api",
        },
        {
          techname: "Entity Framework Core",
        },
        {
          techname: "Microsfot SQL server ",
        },
      ],
    },

    {
      name: "Commands Api",
      des: "A web Api for terminal commands",
      projectlink: "#",
      techused: [
        {
          techname: "ASP.Net Core Web Api",
        },
        {
          techname: "Microsoft SQL Server",
        },
        {
          techname: "Entity Framemork Core",
        },
      ],
    },

    {
      name: "HomeNurse",
      des: "A mobile app that helps users get reminders for their medications and also reach out to health professionals for medical advise",
      projectlink: "#",
      techused: [
        {
          techname: "React-Native",
        },
        {
          techname: "Firebase",
        },
        {
          techname: "Nodejs",
        },
        {
          techname: "Express",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h2>Projects</h2>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
