import React from 'react';
import "./Contact.css";
import "../../App.css";

export default function Contact() {
  return (
    <div className="mainBlock">
        <h1>Contact Me!</h1>

        <a href="mailto:l.bmann@icloud.com" class="d-block mb-4 text-left">Shoot me an email!</a>

        <a href="https://www.linkedin.com/in/laura-baumann-070338102/" target="_blank" 
        rel="noreferrer" class="d-block mb-4 text-left">Connect with me on LinkedIn!</a>

        <a href="https://github.com/thelbaumann" target="_blank" 
        rel="noreferrer" class="d-block mb-2 text-left">Check out what I've been doing on GitHub!</a>

    </div>
  )
}