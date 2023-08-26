/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "To learn, unlearn, and relearn” Aprender, desaprender e reaprender marcam a minha trajetória pessoal e profissional.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Software QA Engineer",
  "Analista de Testes e Qualidade de Software",
  "QA Analyst",
  "Testes Frontend",
  "WCAG Student",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Web design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Enquanto início de carreira, Aprendi e batalhei muito para me formar com honra como Farmacêutica. Eis que me vi começando a trilhar passos na área de tecnologia, mas para isso tive que Desaprender todo o preconceito que me bloqueava, com relação a minha idade e por ser mulher, para enfim conseguir realizar a minha transição de carreira. Agora com toda determinação, força, Reaprendo em uma nova área, mediante minha faculdade de Análise e Desenvolvimento de Sistemas (SPTech) e Ciência da Computação na Unicsul, onde estudo linguagens de programação ligadas ao Front-end (HTML, CSS e Javascript) e ao Back-end (Node.js e introdução a Java) e Banco de Dados (Mysql e SQL Server e MongoDB). Sou organizadora e líder de comunidade GDGSP, os Google Developer Groups (GDG) são a maior comunidade de desenvolvedores do mundo. Há mais de mil GDGs em mais de 140 países. Esse programa promove a interação entre as pessoas desenvolvedoras. Programa apoiado pelo Google e através de eventos, workshops e palestras propagamos conhecimentos. Sou embaixadora do programa Women Techmakers, quando entramos no programa assumimos a missão de trabalhar de forma voluntária junto ao programa para construir um mundo com mais mulheres em tecnologia. Fazemos isso impulsionando a comunidade por meio de eventos como meetups, o IWD, o DevFest... entre outras iniciativas para trazer cada vez mais mulheres para a área. Então não temos um título, e sim uma missão de construir um mundo onde todas as mulheres podem prosperar em tecnologia. Em minhas ações estou motivada a apoiar e impulsionar todas as pessoas nessa área que eu amo que é a tecnologia, contem comigo!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
