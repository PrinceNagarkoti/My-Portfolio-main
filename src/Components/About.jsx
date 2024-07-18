import React from "react";
import Skills from "./Skills.jsx";
import myResume from "../Assets/PrinceNagarkoti-RES.pdf";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Prince Nagarkoti</b> and I am from Dehradun,
            Uttrakhand India. I'm a <b>Frontend web developer</b> and a last year
            university student pursuing <b>Masters in Computer Application</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make discord servers, designs, and do
            photography in my spare time.
          </p>
          <a href={myResume} download className="resume-btn">
            <button>
              Download Resume <FaFileDownload />
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Github" />
        <Skills skill="C" />
        <Skills skill="Java" />
        <Skills skill="Sql" />
      </div>
    </>
  );
};

export default About;
