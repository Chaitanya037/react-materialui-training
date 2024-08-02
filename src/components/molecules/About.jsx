/* eslint-disable react/no-unknown-property */
import about_img from "../../assets/img/about.jpg";
import Heading from "../atoms/Heading";
import './About.css';

const About = () => {
  return (
    <section className="about section " id="about">
      <Heading>About</Heading>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={about_img} alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">I am Marlon</h2>
          <p className="about__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
            soluta, aut earum nemo recusandae cumque perferendis! Recusandae
            alias accusamus atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
