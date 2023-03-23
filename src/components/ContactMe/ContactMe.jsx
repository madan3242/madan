import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div className="contactme-bgc" id="contactme">
        <div className="container contactme">
          <div className="row">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form action="">
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <input
                  className="btn contact-btn"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
