import "./assets/css/styles.css";
import perfil from "./assets/img/perfil.png";
import about_img from "./assets/img/about.jpg";
import work1 from "./assets/img/work1.jpg";
import work2 from "./assets/img/work2.jpg";
import work3 from "./assets/img/work3.jpg";
import work4 from "./assets/img/work4.jpg";
import work5 from "./assets/img/work5.jpg";
import work6 from "./assets/img/work6.jpg";

const App = () => {
  return (
    <>
    <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Marlon</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi, I am <span className="home__title-color">Chaitanya2</span> Web
              Designer
            </h1>
            <a href="#" className="button">
              Contact
            </a>
          </div>
          <div className="home__social">
            <a href="" className="home__social-icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="" className="home__social-icon">
              <i className="bx bxl-behance"></i>
            </a>
            <a href="" className="home__social-icon">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467">
              <mask id="mask0">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image className="home__blob-img" x="50" y="60" href={perfil} />
              </g>
            </svg>
          </div>
        </section>
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
      <footer className="footer">
            <p className="footer__title">Marlon</p>
            <div className="footer__social">
                <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p className="footer__copy">&#169; Bedimcode. All rigths reserved</p>
        </footer>
    </>
  );
};

export default App;
