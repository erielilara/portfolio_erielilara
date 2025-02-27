import React from "react";
import styles from "./socialmedia.module.scss";
import { GitHub, Linkedin, Mail } from "react-feather";

export const SocialMedia = () => {
  return (
    <section className={styles.container}>
      <a
        href="https://www.linkedin.com/in/erielilara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.item}>
          <div className={styles.item2}>
            <Linkedin />
          </div>
          <p>Linkedin</p>
        </div>
      </a>
      <a
        href="https://github.com/erielilara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.item}>
          <div className={styles.item2}>
            <GitHub />
          </div>
          <p>Github</p>
        </div>
      </a>
      <a
        href="mailto:erieli.larad@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.item}>
          <div className={styles.item2}>
            <Mail />
          </div>
          <p>Email</p>
        </div>
      </a>
    </section>
  );
};
