import React, { useState } from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import ModalContent from "../shared/modal/ModalContent";

type IContent = {
  name: string;
  image: string;
  description: string;
};

const About = () => {
  const images: IContent[] = [
    {
      name: "Antioquia, Colombia",
      image: "/images/working3.jpeg",
      description:
        "🌿 One of my favorite places to be! 🌎✨ Guatapé, Antioquia, Colombia 🇨🇴 – a peaceful and relaxing spot where nature feels endless. And in the background? The iconic Piedra del Peñol 🪨🌄. Pure magic! 💚 #NatureLover #GuatapéVibes #Colombia",
    },
    {
      name: "Coffee",
      image: "/images/working2.jpeg",
      description:
        "☕️ Code & coffee kind of day 💻✨Nothing like working with a good latte and a chill view 🌿🌎. Productivity tastes better this way! 🚀 #RemoteWork #CoffeeTime #CodeLife",
    },
    {
      name: "Working",
      image: "/images/working1.jpeg",
      description:
        "💻 Focus mode ON 🚀✨Building, learning, and growing every day! Loving the journey of tech & challenges 💡 #WomenInTech #CodingLife #KeepGrowing",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<IContent | null>(null);

  const openModal = (image: IContent) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.containerImages}>
        {images.map((img, index: number) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openModal(img)}
          >
            <Image
              src={img.image}
              alt={img.name}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <p>
          <em>Hi there!</em>{" "}
          <span>
            I&apos;m Erielí Carolina Lara, a passionate Frontend Developer with
            over three years of experience building modern, high-performance web
            applications. I specialize in React, Next.js, TypeScript, Tailwind
            CSS, and SCSS, creating scalable, maintainable, and visually
            engaging digital experiences.
          </span>
        </p>
        <p>
          I thrive on writing clean, efficient code, optimizing performance, and
          developing reusable components that enhance user interactions. I have
          experience integrating REST APIs, and third-party libraries, ensuring
          seamless functionality across applications. Additionally, I’m
          proficient in Redux and have worked with ShadCN UI, Material UI,
          Bootstrap and other component libraries to create intuitive
          interfaces.
        </p>
        <p>
          I enjoy working on projects that challenge me, where I can apply my
          problem-solving skills and constantly improve my craft.
        </p>
        <p>
          Beyond development, I’m highly organized, detail-oriented, and
          passionate about continuous learning. I’m always eager to explore new
          technologies, collaborate with innovative teams, and contribute to
          impactful projects.
        </p>
        <p>Let’s connect and build something amazing! 🚀</p>
      </div>
      {selectedImage && (
        <ModalContent
          imageSrc={selectedImage.image}
          description={selectedImage.description}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default About;
