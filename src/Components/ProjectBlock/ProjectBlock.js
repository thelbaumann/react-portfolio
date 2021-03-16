import React from "react";
import "./ProjectBlock.css";

function ProjectBlock(props) {

  return (

    <div className="projectFlex">
      
        {props.jsonData.map(project => (

            <div key={project.id} className="ProjectBlock">

              

              <a href={`https://github.com/${project.full_name}`}>
                <h2>
                  /{project.name}
                </h2>
              </a>    

              <a href={`https://thelbaumann.github.io/${project.name}`}>
                <img alt={project.name} src={`https://github.com/${project.owner.login}/${project.name}/raw/main/preview.png`} />
              </a>              

              <p className="description">
                {project.description}
              </p>

              <h2><a href={`https://github.com/${project.full_name}`}>View GitHub Repo</a></h2>

              <h2><a href={`https://thelbaumann.github.io/${project.name}`}>View Deployed Project</a></h2>

              

            </div>

        ))}
    </div>

  );
}

export default ProjectBlock;
