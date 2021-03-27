import React, { Component } from "react";
import Card from "./slides/portcard";
import { Slide } from "react-slideshow-image";
import styles from "../styles/Portfolio.module.css";
import AwesomeSlider from "react-awesome-slider";

const Portfolio = () => {
  return (
    <div className={styles.section}>
      <header className={styles.headPair}>
        <h1>Portfolio</h1>
      </header>
      <AwesomeSlider>
        <div>
          <Card />
        </div>
        <div>
          <Card
            title="musicsnatch"
            sub="music based web app"
            text="an web app designed for locally founded artist who need a platfrom to get recognition in the music industry & this app enables artists to get their music distributed in the internet and keep track of its plays & likes . "
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Portfolio;
