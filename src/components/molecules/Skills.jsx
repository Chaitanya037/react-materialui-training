import "./Skills.css";

import Typography from "@mui/material/Typography";
import Heading from "../atoms/Heading";
import Skill from "../atoms/Skill";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

import skills_img from "../../assets/img/work3.jpg";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Typography
        variant="h4"
        component="h2"
        className="section-title"
        sx={{
          fontSize: "var(--h2-font-size) !important",
          fontWeight: "bold !important",
          margin: "0 0 var(--mb-6) 0",
        }}
      >
        Skills
      </Typography>

      <div className="skills__container bd-grid">
        <div>
          <Heading
            className="skills__subtitle"
            sx={{
              mb: 2,
              textAlign: "start",
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "var(--body-font)"
            }}
          >
            Profesional Skills
          </Heading>
          <Typography
            className="skills__text"
            sx={{
              mb: 4,
              textAlign: "initial",
              fontSize: "var(--normal-font-size)",
              fontFamily: "var(--body-font)",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </Typography>
          <Skill name="HTML5" percentage={95} class_name="skills__html">
            <HtmlIcon fontSize="large" color="primary" />
          </Skill>
          <Skill name="CSS3" percentage={85} class_name="skills__css">
            <CssIcon fontSize="large" color="primary" />
          </Skill>
          <Skill name="JAVASCRIPT" percentage={65} class_name="skills__js">
            <JavascriptIcon fontSize="large" color="primary" />
          </Skill>
          <Skill name="UX/UI" percentage={85} class_name="skills__ux">
            <FormatPaintIcon fontSize="large" color="primary" />
          </Skill>
        </div>

        <div>
          <img src={skills_img} alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
};
export default Skills;
