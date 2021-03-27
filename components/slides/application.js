import React, { Component } from "react";
import styles from "../../styles/Skills.module.css";

const application = () => {
  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <span className={styles.title}>java se</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{width: '67%'}}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>C#</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "47%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>xml</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "39%" }}></div>
        </div>
      </div>
      <div className={styles.bar}>
        <span className={styles.title}>android</span>
        <div className={styles.outer}>
          <div className={styles.inner} style={{ width: "24%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default application;
