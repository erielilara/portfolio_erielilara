import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <h4>LANGUAGES</h4>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>SASS/SCSS</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className={styles.skills}>
        <h4>FRAMEWORKS / LIBRARIES / OTHERS</h4>
        <div className={styles.list}>
          <div>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Material-UI</li>
              <li>Bootstrap</li>
              <li>Scrum / Agile practices.</li>
              <li>UX/UI Basics.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
