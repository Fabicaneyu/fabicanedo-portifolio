/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GDGSP na CPBR15",
    description:
      "A Campus Party é o maior festival de tecnologia, empreendedorismo, ciência e disruptividade do mundo! Com objetivo de criar cada vez mais um ambiente imersivo para debater sobre tecnologia, criatividade, inovação e educação, ou seja, a CPBR15 é o lugar certo para reescrever o código fonte do mundo, fui líder e organizei para a comunidade marcar presença lá, contribuindo ainda mais com o desenvolvimento das pessoas em Tecnologia. Levamos temas sobre Carreira, Diversidade e Acessibilidade. Vem conferir!",
    url: "https://youtube.com/playlist?list=PLX5nnUEiHND3oyKr8W9tBBtOHIJ1Htwgf&si=lbXCblLPEQz84vpy",
  },
  {
    title: "TDC2023 | Innovation| Diversidade",
    description:
      "Fui coordenadora da trilha de Diversidade do TDC, com objetivo de apresentar a diversidade como impulsionadora da inovação!",
    url: "https://youtube.com/playlist?list=PLv3L8f6F-z9L-Rlpcn5GC86rcoFjpE9YX&si=l9hclEYDpqafR30a",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
