import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div id="contactme">
        <div className="container contactme">
          <div className="row">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form target="_blank" action="https://formsubmit.co/madangowda3242@gmail.com" method="POST">
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Your Message"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div className="mt-3">
                <input
                  className="btn contact-btn"
                  type="submit"
                  value="Submit"
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
