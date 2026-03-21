import "./styles/TechStack.css";
import { portfolioData } from "../data/portfolioData";

const TechStack = () => {
  return (
    <section className="techstack section-container" id="skills">
      <div className="techstack-header">
        <p className="techstack-eyebrow">Skills & Credentials</p>
        <h2>Tools, learning, and momentum.</h2>
        <p className="techstack-intro">
          A quick view of the technologies, coursework, certifications, and
          achievements that shape how I approach projects.
        </p>
      </div>

      <div className="techstack-grid">
        <div className="techstack-panel techstack-panel-wide">
          <div className="techstack-panel-head">
            <h3>Technical Skills</h3>
            <span>Built from coursework and hands-on projects</span>
          </div>
          <div className="techstack-groups">
            {portfolioData.skillGroups.map((group) => (
              <article className="techstack-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="techstack-tags">
                  {group.skills.map((skill) => (
                    <span className="techstack-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="techstack-panel">
          <div className="techstack-panel-head">
            <h3>Education</h3>
            <span>Academic foundation</span>
          </div>
          <div className="techstack-education">
            {portfolioData.education.map((item) => (
              <article className="techstack-education-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.institution}</p>
                <span>{item.meta}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="techstack-panel">
          <div className="techstack-panel-head">
            <h3>Certifications</h3>
            <span>Continuous learning</span>
          </div>
          <ul className="techstack-list">
            {portfolioData.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="techstack-panel techstack-highlight">
          <div className="techstack-panel-head">
            <h3>Achievement</h3>
            <span>Beyond coursework</span>
          </div>
          <p>{portfolioData.achievement}</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
