import Heading from "../atoms/Heading";
import Skill from "../atoms/Skill";

import './Skills.css';

import skills_img from '../../assets/img/work3.jpg';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Heading className="section-title">Skills</Heading>

      <div className="skills__container bd-grid">
        <div>
          <Heading className="skills__subtitle">Profesional Skills</Heading>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <Skill name='HTML5' percentage={95} class_name='skills__html' icon='bxl-html5' />
          <Skill name='CSS3' percentage={85} class_name='skills__css' icon='bxl-css3' />
          <Skill name='JAVASCRIPT' percentage={65} class_name='skills__js' icon='bxl-javascript' />
          <Skill name='UX/UI' percentage={85} class_name='skills__ux' icon='bxl-paint' />
        </div>

        <div>
          <img src={skills_img} alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
};
export default Skills;
