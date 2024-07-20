import React from "react";
import ProjectBox from "./ProjectBox";
import snake from "../images/Snake.png";
import Global from "../images/countries.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Global} projectName="GlobalInsight" />
        <ProjectBox projectPhoto={snake} projectName="SnakeGame" />
        <ProjectBox projectPhoto={ColourImage} projectName="ExpenseTracker" />
        <ProjectBox projectPhoto={BackpackImage} projectName="Backpack" />
      </div>
    </div>
  );
};

export default Projects;
