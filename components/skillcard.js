import React, { Component } from "react";
import styles from "../styles/Skills.module.css";

const skillcard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <span className={styles.title}>HTML</span>
        <div className={styles.outer}>
          <div className={styles.inner}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>scss</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "87%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>js</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "69%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>React</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "77%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>angular</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "57%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>Next.js</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "87%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default skillcard;
