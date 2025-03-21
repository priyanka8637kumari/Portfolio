import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Priyanka! 👋 </h1>
        <p className={styles.description}>
          A Frontend Developer Student at{" "}
          <span className={styles.highlight}>Hyper Island, Stockholm</span>.
          Building user-friendly & interactive web experiences with HTML,
          JavaScript, React and Tailwind CSS. 🚀
        </p>
        <div className={styles.heroButtons}>
        <a href="mailto:prisri0801@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={getImageUrl("hero/Resume-Priyanka.pdf")} download className={styles.contactBtn}>
          Download CV
        </a></div>
      </div>
      <img
        src={getImageUrl("hero/priyanka.png")}
        alt="hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
