import React, { Component } from "react";
import "./index.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-area">
          <div className="contact-details">
            <div className="contact-title">Contact:</div>
            <div className="contact-detail">
              <div>Name:</div>
              <div>Betsy Kettle</div>
            </div>
            <div className="contact-detail">
              <div>Mobile:</div>
              <div>021 0826 8196</div>
            </div>
            <div className="contact-detail">
              <div>Email:</div>
              <div>hibiscuscoastzerowaste@gmail.com</div>
            </div>
          </div>
          <div classNae="contact-actions">
            <a
              href="mailto:hibiscuscoastzerowaste@gmail.com"
              className="contact-button"
            >
              Email Now
            </a>
            <a href="tel:02108268196" className="contact-button">
              Call Now
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6403.406326221779!2d174.738485805383!3d-36.63353113209597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa2fc2001f7b089!2sWhangapar%C4%81oa%20Recycling%20Depot!5e0!3m2!1sen!2snz!4v1586330053017!5m2!1sen!2snz"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen=""
          borderRadius="1rem"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    );
  }
}
