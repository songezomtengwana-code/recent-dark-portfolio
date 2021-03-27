import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/footer";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={Styles.body}>
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  );
}
