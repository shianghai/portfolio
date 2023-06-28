import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Fade from "react-reveal/Fade";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {

          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJobtypes("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <di>
      <div className="section-title">
        <h2>Contact</h2>
        <span className="line"></span>
      </div>
      <div className="container contact-section" id="contactsection">

        <div className="row">
          <Fade bottom>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5" style={{ alignItems: "flex-start", justifyContent: "center", display: "flex", flexDirection: "column" }}>
              <div>
                <div className="address-item">
                  <p className="address-item-header">Address</p>
                  <p className="address-content">
                    Mempeasem, East Legon
                    Accra, Ghana
                  </p>
                </div>
                <div className="address-item">
                  <p className="address-item-header">Phone</p>
                  <p className="address-content">0531584995</p>
                </div>
                <div className="address-item">
                  <p className="address-item-header">Email</p>
                  <p className="address-content">
                    fshiangah@st.ug.edu.gh
                    shiangahfrancis@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              <div className="contact-form-design">
                <div className="text-center">
                  <h5>Send Me A Message</h5>
                </div>
                <form>
                  <div className="contact-form">
                    <label className="form-lebel">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="contact-form">
                    <label className="form-lebel">E-mail</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="contact-form">
                    <label className="form-lebel">Job Types</label>
                    <select
                      className="custom-select-tag"
                      value={jobtypes}
                      onChange={(e) => setJobtypes(e.target.value)}
                    >
                      <option>Full-time</option>
                      <option>Working Student</option>

                      <option>Part-time</option>

                      <option>Contract</option>
                    </select>
                  </div>

                  <div className="contact-form">
                    <label className="form-lebel">Message</label>
                    <textarea
                      rows="4"
                      type="text"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="button-submit" onClick={sendemailInfo}>
                    <p>
                      Send <RiSendPlaneFill size={20} />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>

        <ToastContainer draggable autoClose={8000} />
      </div>
    </di>
   
  );
};

export default Contact;
