import React from "react";
import Image from "next/image";
import styles from "./work.module.scss";

type IContent = {
  imageIcon: string;
  name: string;
  image: string;
  jobName: string;
  description: string;
  link: string;
};

const Work = () => {
  const jobs: IContent[] = [
    {
      imageIcon: "/images/adsassistantIcon.png",
      name: "adassistant.ai",
      image: "/images/adsassistant.png",
      jobName: "Frontend Developer",
      link: "https://adsassistant.ai/",
      description:
        "MAR 2023 - PRESENT 🚀 As a Frontend Developer at AdsAssistant.ai, I create and optimize seamless user experiences for digital marketing professionals. Working with React & Redux, I build scalable and intuitive interfaces that enhance campaign management. I integrate AI-powered automation to simplify workflows, making content generation and ad setup effortless. My work focuses on improving performance, usability, and engagement, ensuring a smooth experience. I also lead UX enhancements and A/B testing to refine every detail. Turning complex marketing processes into fast, smart, and efficient solutions! 💻✨ #FrontendDev #AI #React #MarketingTech",
    },
    {
      imageIcon: "/images/klousterIcon.png",
      name: "Kloustr Labs",
      image: "/images/kloustr.png",
      jobName: "Mobile Developer",
      link: "https://kloustrlabs.com/home/",
      description:
        "APR 2022 - APR 2023📱 As a Mobile Developer at Kloustr Labs, I built high-performance Flutter applications with seamless state management using BLoC & Provider. Focused on creating fast, intuitive, and user-friendly experiences, I optimized app responsiveness and real-time data synchronization. I collaborated with product teams & UX designers to transform user feedback into impactful features. My work ensured smooth functionality even in low-connectivity scenarios, enhancing usability and engagement. Turning ideas into powerful mobile solutions! 🚀✨ #Flutter #MobileDev #UX #TechInnovation",
    },
    {
      imageIcon: "/images/afectusIcon.png",
      name: "Afectus S.A.S.",
      image: "/images/afectus.png",
      jobName: "Frontend Developer",
      link: "https://afectus.com/",
      description:
        "JAN 2022 – APR 2022. 🌐 As a Frontend Developer at Afectus S.A.S., I built and maintained a responsive, user-friendly web experience using Next.js & JavaScript. Focused on performance optimization, I improved load times and responsiveness for a seamless interface. I also integrated analytics tools to track user interactions, turning data into actionable insights for continuous improvement. Creating fast, efficient, and engaging digital experiences! 🚀✨ #FrontendDev #NextJS #WebPerformance #UX",
    },
  ];
  return (
    <div className={styles.maincontainer}>
      {jobs.map((job, index: number) => (
        <>
          <a href={job.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.jobtitle}>
              <Image
                src={job.imageIcon}
                alt={job.name}
                width={32}
                height={32}
                className={styles.jobicon}
              />
              <div>
                <p>{job.name}</p>
                <p>{job.jobName}</p>
              </div>
            </div>
            <div key={index} className={styles.imagecontainer}>
              <Image
                src={job.image}
                alt={job.name}
                fill
                className={styles.image}
              />
            </div>
          </a>
          <div className={styles.description}>
            <Image
              src={job.imageIcon}
              alt={job.name}
              width={32}
              height={32}
              className={styles.jobicon}
            />
            <div>
              <p>{job.name}:</p>
              <p>{job.description}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Work;
