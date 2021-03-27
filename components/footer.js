import React, { Component } from "react";
import styles from "../styles/footer.module.css";

const footer = () => {
  return (
    <footer className={styles.section}>
      <section className={styles.form}>
        <div className={styles.formDisplay}>
          <div className={styles.box}>
            <h2>Contact Me</h2>
            <form
              action="MAILTO:songezomtengwana@gmail.com"
              method="POST"
              enctype="text/plain"
            >
              <div>
                <input type="text" name="name" required />
                <label>Name</label>
              </div>
              <div>
                <input type="email" name="" required/>
                <label>Email</label>
              </div>
              <div>
                <textarea
                  name="subject"
                  id=""
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <label>Subject</label>
              </div>

              <button type="submit" value="submit">
                {" "}
                Send Message{" "}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.socials}>
        <div className={styles.contacts}>
          <div className={styles.info}>
            <h2>Online platforms</h2>
            <div className={styles.liltitle}>
              <p>Work</p>
            </div>
            <div className={styles.row}>
              <ul>
                <li>
                  <a href="https://github.com/songezomtengwana-code">
                    <i className="bi bi-github"></i> 
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.liltitle}>
              <p>Social</p>
            </div>
            <div className={styles.row}>
              <ul>
                <li>
                  <a href="mailto:songezomtngwana20@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="https://web.facebook.com/songezo.mtengwana.1">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/KiingMn">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/RandomBlackDude03">
                    <i className="bi bi-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default footer;
