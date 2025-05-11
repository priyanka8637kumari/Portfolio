import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="aboutImage"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursorImage" />
            <div className={styles.aboutItemText}>
              <h3>FrontEnd Developer</h3>
              <p>
                Specializing in building responsive, user-friendly applications
                using the MERN stack (MongoDB, Express.js, React, Node.js)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="serverImage" />
            <div className={styles.aboutItemText}>
              {/* <h3>BackEnd Developer</h3> */}
              <p>
                Skilled in Tailwind CSS, Vite, GitHub, and Strapi, with a strong
                focus on clean UI and seamless user experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="uiImage" />
            <div className={styles.aboutItemText}>
              {/* <h3>UI Designer</h3> */}
              <p>
                Passionate about solving real-world problems through code and
                continuously improving performance and design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
