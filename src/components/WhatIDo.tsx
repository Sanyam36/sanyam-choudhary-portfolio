import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolioData";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    const cleanup: Array<() => void> = [];

    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container, index) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(index, containerRef.current);
          container.addEventListener("click", handler);
          cleanup.push(() => container.removeEventListener("click", handler));
        }
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> BUILD</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>{portfolioData.focusAreas[0].title}</h3>
              <h4>{portfolioData.focusAreas[0].subtitle}</h4>
              <p>{portfolioData.focusAreas[0].description}</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {portfolioData.focusAreas[0].tags.map((tag) => (
                  <div className="what-tags" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>{portfolioData.focusAreas[1].title}</h3>
              <h4>{portfolioData.focusAreas[1].subtitle}</h4>
              <p>{portfolioData.focusAreas[1].description}</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {portfolioData.focusAreas[1].tags.map((tag) => (
                  <div className="what-tags" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(
  activeIndex: number,
  containers: (HTMLDivElement | null)[]
) {
  containers.forEach((container, index) => {
    if (!container) return;

    if (index === activeIndex) {
      container.classList.toggle("what-content-active");
      container.classList.remove("what-sibling");
      return;
    }

    container.classList.remove("what-content-active");
    container.classList.toggle(
      "what-sibling",
      containers[activeIndex]?.classList.contains("what-content-active")
    );
  });
}
