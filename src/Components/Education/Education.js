import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "University Of Ghana",
      degree: "Bsc Computer Science",
      year: "2017-2022",
      des: "Completed a four year bachelor of science in Computer Science at the the premier university",
    },
   
    {
      name: "Anseco (Anlo Senior High School)",
      degree: "General Science",
      year: "2013-2016",
      des: "Completed Anlo Senior Secondary School located at Anloga in the heart of the volta region",
    },
  ];


  const colors = [
    "#001CCE",
    "#4B088A",
    "#FE2EF7",
    "#FF1042",
  ];

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <h2>Education</h2>
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
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degree}
              </h5>


              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
