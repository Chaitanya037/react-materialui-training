import "./assets/css/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import work1 from "./assets/img/work1.jpg";
import work2 from "./assets/img/work2.jpg";
import work3 from "./assets/img/work3.jpg";
import work4 from "./assets/img/work4.jpg";
import work5 from "./assets/img/work5.jpg";
import work6 from "./assets/img/work6.jpg";
import Header from './components/navigation/Header.jsx';
import Footer from "./components/navigation/Footer.jsx";
import Intro from "./components/molecules/Intro.jsx";
import About from "./components/molecules/About.jsx";
import Skills from "./components/molecules/Skills.jsx";

const App = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <>
      <Header />
      <main className="l-main">
        <Intro />
        <About />
        <Skills />
        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid">
            <a href="" className="work__img">
              <img src={work1} alt="" />
            </a>
            <a href="" className="work__img">
              <img src={work2} alt="" />
            </a>
            <a href="" className="work__img">
              <img src={work3} alt="" />
            </a>
            <a href="" className="work__img">
              <img src={work4} alt="" />
            </a>
            <a href="" className="work__img">
              <img src={work5} alt="" />
            </a>
            <a href="" className="work__img">
              <img src={work6} alt="" />
            </a>
          </div>
        </section>
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form action="" className="contact__form">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="mail"
                placeholder="Email"
                className="contact__input"
              />
              <textarea
                name=""
                id=""
                cols="0"
                rows="10"
                className="contact__input"
              ></textarea>
              <input
                type="button"
                value="Enviar"
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
