import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "react-feather";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.avcontainer}>
        <Image
          src="/images/foto_pErieli.jpeg"
          alt="Profile pic"
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <div className={styles.name}>
        <div className={styles.profile}>
          <h2>erielilara</h2>
          <div className={styles.profilebtns}>
            <a href="/pdf/Erieli_Carolina_Lara_Frontend_Dev.pdf" download>
              <button type="button" className={styles.button}>
                Download CV
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/erielilara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}> Visit my LinkedIn</button>
            </a>
            <button onClick={toggleTheme} className={styles.mode}>
              {theme === "light" ? (
                <Moon size={30} color="#000000" className={styles.icon} />
              ) : (
                <Sun size={30} color="#F7F7F7" className={styles.icon} />
              )}
            </button>
          </div>
        </div>
        <div>
          <div className={styles.name2}>
            <p>Erielí Carolina Lara</p>
          </div>
          <div>
            <button className={styles.usernameButton}>@erielilara</button>
          </div>
          <div className={styles.details}>
            <p>💻✨ Frontend Developer</p>
            <p>📌 Medellín, Colombia</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
