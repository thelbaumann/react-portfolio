import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Portfolio.css";
import "../../App.css";
import ProjectBlock from "../ProjectBlock/ProjectBlock"

export default function Portfolio() {

  const [ProjectState, setProjectState] = useState([]);

  useEffect(() => {
    getRepos()
  }, []);


  async function getRepos() {
  
    console.log("accessing github repos");
  
    const res = await axios.get("https://api.github.com/users/thelbaumann/starred");
  
    console.log(res);

    console.log(res.data);
  
    setProjectState(res.data);
    
  }

  return (
    <div className="mainBlock Portfolio">
        <h2>Bootcamp Portfolio</h2>

        <h3>My most recent projects for my Full Stack Coding Bootcamp! Click the images to visit the webpage associated with the project!</h3>

        <ProjectBlock
          jsonData={ProjectState}
        />
    

    </div>
  )
}