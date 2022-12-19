import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { ImEarth, ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { contactInfo } from "./data";

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const icons = [
    <ImLocation2 className="icon" />,
    <FiPhone className="icon" />,
    <MdEmail className="icon" />,
    <ImEarth className="icon" />,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section support">
      <div className="title">
        <h1 className="section-header">
          Contact support / Feature suggestions
        </h1>
        <div className="underline"></div>
      </div>

      <div className="support-container">
        <div className="content">
          <h4 className="form-header">Send us a message</h4>

          <form onClick={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="input"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="input"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                className="input"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="input"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                required
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>

        <div className="content contact-infos">
          <div className="contact-container">
            <div className="info-header">
              <h4>Contact us</h4>
              <div className="underline crimson "></div>
            </div>
            <p>We are open to any suggestion or just to have a chat</p>
            <div className="info-container">
              {contactInfo.map((item, index) => {
                return (
                  <div className="info">
                    <>{icons[index]}</>
                    <div>
                      <span className="text">{item.title}:</span>
                      <span className="text">{item.content}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
