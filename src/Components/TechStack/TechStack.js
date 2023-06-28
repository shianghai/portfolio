import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


const TechStack = () => {
  const data = [
    {
      name: "C#",
      stack: "backend"
    },
    {
      name: ".Net Core",
      stack: "backend"
    },  
    {
      name: "Entity Framework Core"
    },
    {
      name: "XUnit",
      stack: "backend",
    },
    {
      name: "Moq",
      stack: "backend"
    },
    {
      name: "Javascript",
      stack: "frontend"
    },
    {
      name: "Typescript",
      stack: "frontend"
    },
    
    // {
    //   name: "React-Native",
    //   stack: "mobile"
    // },
    
    {
      name: "Node js",
      stack: "backend"
    },
    {
      name: "Express",
      stack: "backend"
    },
    {
      name: "Microsoft SQL Server"
    }, 
    {
       name: "React js",
       stack: "frontend"
     },
  ];

  const frontendStack = [
    {
      name: "React js",
      stack: "frontend"
    },
    {
      name: "Javascript",
      stack: "frontend"
    },
    {
      name: "Typescript",
      stack: "frontend"
    },
  ]

  const backendStack = [
    {
      name: "C#",
      stack: "backend"
    },
    {
      name: ".Net Core",
      stack: "backend"
    },
    {
      name: "Node js",
      stack: "backend"
    },
    {
      name: "Express",
      stack: "backend"
    },
  ]

  const mobileStack = [
    {
      name: "React-Native",
      stack: "mobile"
    },
  ]



  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h2>Skills And Tech Stack</h2>
        <span className="line" style={{marginBottom: '5%'}}></span>
      </div>


      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                   "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
        {/* <div className="col-xl-4 col-lg-2 col-md-2 col-sm-12">
          <h3>Backend Development</h3>
          {
            backendStack.map((skill, index) => {
              return (

                <div key={index}>

                  <Fade right>
                    <div
                      className={"tech-content"
                      }
                    >

                      <span
                        className="tech-number"
                        style={{ backgroundColor: colors[index] }}
                      >
                        {index + 1}
                      </span>
                      <p>{skill.name}</p>
                    </div>
                  </Fade>
                </div>

              )
            })
          }
        </div>
        <div className="col-xl-4 col-lg-2 col-md-2 col-sm-12">
          <h3>Frontend Development</h3>
          {
            frontendStack.map((skill, index) => {
              return (

                <div key={index}>

                  <Fade right>
                    <div
                      className={"tech-content"
                      }
                    >

                      <span
                        className="tech-number"
                        style={{ backgroundColor: colors[index] }}
                      >
                        {index + 1}
                      </span>
                      <p>{skill.name}</p>
                    </div>
                  </Fade>
                </div>

              )
            })
          }
        </div>
        <div className="col-xl-4 col-lg-2 col-md-2 col-sm-12">
          <h3>Mobile Development</h3>
          {
            mobileStack.map((skill, index) => {
              return (

                <div key={index}>

                  <Fade right>
                    <div
                      className={"tech-content"
                      }
                    >

                      <span
                        className="tech-number"
                        style={{ backgroundColor: colors[index] }}
                      >
                        {index + 1}
                      </span>
                      <p>{skill.name}</p>
                    </div>
                  </Fade>
                </div>

              )
            })
          }
        </div> */}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
