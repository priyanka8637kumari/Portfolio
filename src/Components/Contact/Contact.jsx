import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
            Feel free to reach out to me!
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
            <a href="mailto:prisri0801@gmail.com">prisri0801@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/priyanka-kumari-995901274//">linkedin.com/in/priyanka-kumari-995901274/</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
            <a href="https://github.com/priyanka8637kumari">https://github.com/priyanka8637kumari</a>
        </li>
      </ul>
    </footer>
  );
};
