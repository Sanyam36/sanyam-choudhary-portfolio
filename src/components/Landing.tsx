import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{portfolioData.hero.eyebrow}</h2>
            <h1>
              {portfolioData.firstName.toUpperCase()}
              <br />
              <span>{portfolioData.lastName.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{portfolioData.hero.titleLead}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{portfolioData.hero.roles[0]}</div>
              <div className="landing-h2-2">{portfolioData.hero.roles[1]}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{portfolioData.hero.roles[1]}</div>
              <div className="landing-h2-info-1">{portfolioData.hero.roles[0]}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
