import { Fragment } from "react";

export const description = (
  <Fragment>
    Esto es un <span>TEST</span> para recordar conceptos de <span>react</span> y{" "}
    <span>css</span>, consta de una app sencilla que utiliza unas
    <span> hooks</span> y librerias como <span>MaterialUI</span>.
  </Fragment>
);

export const redes = [
  {
    id: "linkedin1",
    text: "LINKEDIN",
    link: "https://www.linkedin.com/in/augusto-del-grosso/",
    image: require("./images/redes/linkedin.png")
  },
  {
    id: "github2",
    text: "GITHUB",
    link: "https://github.com/augustodelg",
    image: require("./images/redes/github.png")
  },
  {
    id: "instagran3",
    text: "INSTAGRAM",
    link: "https://www.instagram.com/augustodelg/",
    image: require("./images/redes/instagram.png")
  }
];

export const technologies = [
  {
    aspectRatio: "1.2",
    image: require("./images/technologies/react.png")
  },
  {
    aspectRatio: "1.2",
    image: require("./images/technologies/material-ui.png")
  },
  {
    aspectRatio: "1.2",
    image: require("./images/technologies/css.png")
  }
];
