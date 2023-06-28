import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "BIC Technologies Company Limited",
      position: "Full Stack Developer",
      des: "Currently doing my 1 year obligatory national service duty at BIC Technologies. Which is a software comapany that provides bussiness applications for insurance companies in Ghana",
      year: "2022-Current",
      techskills: [
        {
          techname: ".Net Core",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "JQuery",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Javascript",
        },
      ],
    },

    {
      companyname: "Techup Studios",
      position: "Full Stack Mobile App Developer ",
      des: "Techup Studios is a startup company that delivers software as a service",
      year: "2020-2021",

      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React",
        },
        {
          techname: "React Native",
        },
      ],
    },
  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h2>Work Experience</h2>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
