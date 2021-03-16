import React from 'react';
import "./Index.css";
import "../../App.css";

export default function Index() {
  return (
    <div className="mainBlock Index">
        <h1>Portfolio</h1>

        <h2>FullStack Developer with 3+ years of Frontend Experience</h2>

        <h3>
          <span className="br">
          <a href="mailto:l.bmann@icloud.com">l.bmann@icloud.com</a>
          </span>
          <span className="br">
            304-672-3342
          </span>
          <span className="br">
          Columbus, OH  — <strong>willing to relocate!</strong>
          </span>
          </h3>

          <p>
            An alum of Butler University, I graduated in 2018 as a dual major in Web Design + Development and Strategic Communication. I graduated with a 3.8 GPA, having been the top student of both of my majors and a top 15 student at the university. Since then, I worked for 2.5 years at Abercrombie &amp; Fitch headquarters in New Albany, OH as a front end web developer. I worked on seasonal and daily updates for the Abercrombie Kids brand, utilizing mainly HTML5, CSS3, Javascript ES5/6, and JQuery. I left this most recent career in mid February 2021 to spend more time on my current fullstack web development bootcamp education while I search for a fullstack position!
          </p>

          <a href="https://www.linkedin.com/in/laura-baumann/" target="_blank" 
          rel="noreferrer" className="about-link">Connect with me on LinkedIn!</a>

          <a href="https://github.com/thelbaumann" target="_blank" 
          rel="noreferrer" className="about-link">Check out what I've been doing on GitHub!</a>

          <a href="./assets/Resume.pdf" download="" className="about-link">Download my resume!</a>

    </div>
  )
}