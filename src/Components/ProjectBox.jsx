import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    GlobalInsightDesc:
      "This website allows users to explore detailed information about any country in the world. This helped me understand React better and more clearly. I also learned how to host on Netlify.",
      GlobalInsightGithub: "https://github.com/PrinceNagarkoti/GlobalInsights-HandsOnProject.git",
      GlobalInsightWebsite: "https://globalxinsights.netlify.app/",

    SnakeGameDesc:
      "This project is a fun and interactive rendition of the classic Snake game. It features smooth controls, responsive design, showcasing my web development skills and understanding of front-end technologies.",
    SnakeGameGithub: "https://github.com/PrinceNagarkoti/SnakeGame.git",
    SnakeGameWebsite: "https://classicxsnakegame.netlify.app/",

    ExpenseTrackerDesc:
      "This Expense Tracker web application helps you manage your personal finances efficiently. The project allowed me to deepen my understanding of React Js by implementing advanced techniques",
      ExpenseTrackerGithub: "https://github.com/PrinceNagarkoti/Expense-Tracker.git",
      ExpenseTrackerWebsite: "https://github.com/PrinceNagarkoti/Expense-Tracker.git",

    BackpackDesc:
      "This webpage was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    BackpackGithub: "https://github.com/PrinceNagarkoti/Landing-Page.git",
    BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
