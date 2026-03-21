import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Reach Out</h4>
            <p>
              <a href={`mailto:${portfolioData.email}`} data-cursor="disable">
                {portfolioData.email}
              </a>
            </p>
            <p>
              <a href={portfolioData.phoneHref} data-cursor="disable">
                {portfolioData.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p>{portfolioData.location}</p>
          </div>
          <div className="contact-box">
            <h4>Resume Snapshot</h4>
            <p>{portfolioData.education[0].title}</p>
            <p>{portfolioData.education[0].institution}</p>
            <a
              href={portfolioData.resumePath}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Open Resume <MdArrowOutward />
            </a>
            <a
              href={portfolioData.linkedIn}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Building web, AI, and student-led projects as <br />
              <span>{portfolioData.name}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
