import React, { Component } from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.section}>
      <section className={styles.left}>
        <header className={styles.headPair}>
          <h1>Hey im Songezo</h1>
          <p>FrontEnd Developer</p>
        </header>
        <p className={styles.text}>
          I am a frontend developer based in the eastern cape in fort beaufort
          with at least a minimum level of fronted development knowledge . i
          strated design & development in 2020 and have managed to learn and get
          familiar with some of the languges and know how to use them for
          development . i also do design & prototyping in figma .
        </p>
      </section>
    </section>
  );
};

export default About;
