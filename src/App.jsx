import "./assets/css/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import about_img from "./assets/img/about.jpg";
import work1 from "./assets/img/work1.jpg";
import work2 from "./assets/img/work2.jpg";
import work3 from "./assets/img/work3.jpg";
import work4 from "./assets/img/work4.jpg";
import work5 from "./assets/img/work5.jpg";
import work6 from "./assets/img/work6.jpg";
// import Header from './components/navigation/Header.jsx';
import Footer from "./components/navigation/Footer.jsx";
import Intro from "./components/molecules/Intro.jsx";
import MaterialHeader from "./components/navigation/MaterialHeader.jsx";

const App = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <>
      <MaterialHeader />
      {/* <Header /> */}
      <main className="l-main">
        <Intro />
        <section className="about section " id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <img src={about_img} alt="" />
            </div>

            <div>
              <h2 className="about__subtitle">I am Marlon</h2>
              <p className="about__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                ut voluptates soluta, aut earum nemo recusandae cumque
                perferendis! Recusandae alias accusamus atque.
              </p>
            </div>
          </div>
        </section>
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Profesional Skills</h2>
              <p className="skills__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                optio id vero amet, alias architecto consectetur error eum eaque
                sit.
              </p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-html5 skills__icon"></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html"></div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-css3 skills__icon"></i>
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css"></div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-javascript skills__icon"></i>
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js"></div>
                <div>
                  <span className="skills__percentage">65%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxs-paint skills__icon"></i>
                  <span className="skills__name">UX/UI</span>
                </div>
                <div className="skills__bar skills__ux"></div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
            </div>

            <div>
              <img src="assets/img/work3.jpg" alt="" className="skills__img" />
            </div>
          </div>
        </section>
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
