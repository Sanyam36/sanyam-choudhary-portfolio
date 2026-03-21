import {
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { MdEmail, MdPhone } from "react-icons/md";
import { portfolioData } from "../data/portfolioData";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href={portfolioData.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </span>
        <span>
          <a href={portfolioData.phoneHref} aria-label="Phone">
            <MdPhone />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={portfolioData.resumePath}
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
