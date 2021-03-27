import React, { Component } from "react";
import styles from "../styles/Skills.module.css";
import Card from "./skillcard";
import App from "./slides/application";
import AwesomeSlider from "react-awesome-slider";

const skills = () => {
  return (
    <section className={styles.section}>
      <header className={styles.head}>
        <h1>Skillset</h1>
      </header>
      <AwesomeSlider>
        <div>
          <Card />
        </div>
        <div>
          <App />
        </div>
      </AwesomeSlider>
    </section>
  );
};

export default skills;
