import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="aboutImage"  className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursorImage" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                Passionate about creating beautiful and functional websites
                using React, JavaScript, HTML, CSS, and Tailwind CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverImage" />
            <div className={styles.aboutItemText}>
              {/* <h3>BackEnd Developer</h3> */}
              <p>
                I am currently exploring Node.js to
                become a full-stack developer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="uiImage" />
            <div className={styles.aboutItemText}>
              {/* <h3>UI Designer</h3> */}
              <p>
              My goal is to become a proficient frontend developer, constantly learning and improving. I love working on innovative projects that make an impact. Let&apos;s build something amazing together
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
