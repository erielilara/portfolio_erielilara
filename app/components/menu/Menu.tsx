import React, { useState } from "react";
import styles from "./menu.module.scss";
import About from "../about/About";
import { Grid, Terminal, Trello } from "react-feather";
import Work from "../work/Work";
import Skills from "../skills/Skills";

const Menu = () => {
  const TABS = [
    {
      icon: <Grid className={styles.icon} />,
      label: "About",
      value: "about",
      component: <About />,
    },
    {
      icon: <Terminal className={styles.icon} />,
      label: "Work",
      value: "work",
      component: <Work />,
    },
    {
      icon: <Trello className={styles.icon} />,
      label: "Skills",
      value: "reels",
      component: <Skills />,
    },
  ];
  const [activeTab, setActiveTab] = useState(TABS[0].value);

  const currentTabComponent = TABS.find(
    (tab) => tab.value === activeTab
  )?.component;

  return (
    <>
      <div className={styles.menucontainer}>
        {TABS.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <div
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`${styles.tabButton} ${
                isActive ? styles.activeTab : ""
              }`}
            >
              {tab.icon}
              <p>{tab.label}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.content}>{currentTabComponent}</div>
    </>
  );
};

export default Menu;
