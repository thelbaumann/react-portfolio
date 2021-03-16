import React from 'react';
import "../../App.css";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div className="h1-styling">
            <Link to="/">
                <div className="internal-flex-1">
                    <img src="./images/headshot-cropped.png" alt="Laura Baumann headshot"/>
                </div>
                <div className="internal-flex-2">
                    <h1>Laura Baumann</h1>
                </div>
            </Link>
        </div>
        <ul className="nav">
            

            <Link to="/projects">
                <li>Projects</li>
            </Link>

            <Link to="/contact">
                <li>Contact</li>
            </Link>
        </ul>
    </header>
  )
}