import React from "react";
import "./About.css";
import ProfilePic from "../../Image/dp.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section col-xl-6 col-lg-12 col-md-12 col-sm-12" id="about">
      <div>
        {/* <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade> */}

        <div>
          <div className="about-details">
            <Flip left>
              <div className="section-title">
                <h2>About Me</h2>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>

              <div className="container" style={{fontFamily: 'sans-serif', fontSize: '25px',}}>
                I am a passionate Software Developer with a deep love for technology and a keen eye for detail, I strive to create innovative solutions that bridge the gap between front-end and back-end development.

                My journey into the world of software development began in senior high school days when i realized the cool stuff i could do with the BATCH programming language,
                and since then, I have honed my skills to become a versatile and proficient Fullstack Engineer. I possess a good foundation in both front-end and back-end technologies, allowing me to seamlessly navigate the entire software development lifecycle.

                I have a strong understanding of RESTful API design principles and utilize modern tools and frameworks to build efficient and secure web services.

                I belive Continuous learning is at the core of every profession. It is for this reason that i always try to learn new things and add more to my technology arsenal .

                <p>
                  I value teamwork, empathy, and effective communication. I believe that collaboration and a positive work environment are essential for delivering exceptional results and fostering long-term relationships with clients and colleagues.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
