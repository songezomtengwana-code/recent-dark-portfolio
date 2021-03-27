import Head from "../components/Meta";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-slideshow-image/dist/styles.css";
import "../styles/ham.css";
import "../styles/slider.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import 'react-awesome-slider/dist/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head />
      <Nav />
      <Component {...pageProps} />{" "}
    </div>
  );
}

export default MyApp;
