import styles from "../styles/Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

const Nav = () => {
  return (
    <main>
      <nav className={styles.nav}>
        <span className={styles.icon}></span>
        <span className={styles.ham}>
          <i className="bi bi-list" />
        </span>
        <section className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
          <Link href="/" className={styles.link}>
            Portfolio
          </Link>
        </section>
        <button className={styles.btn}>Contact Me</button>
      </nav>
      <Menu width={"100%"} right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>

        <div className="row">
          <a href="/">
            <i className="bi bi-github menu-item" />
          </a>
          <a href="/">
            <i className="bi bi-instagram menu-item" />
          </a>
          <a href="/">
            <i className="bi bi-facebook menu-item" />
          </a>
          <a href="/">
            <i className="bi bi-envelope menu-item" />
          </a>
        </div>
      </Menu>
    </main>
  );
};


export default Nav;
