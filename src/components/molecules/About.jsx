import about_img from "../../assets/img/about.jpg";
import Heading from "../atoms/Heading";
import "./About.css";
import { Container, Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Container className="about section " id="about">
        <Heading className="section-title">About</Heading>
        <Box className="about__container bd-grid">
          <Box className="about__img">
            <img src={about_img} alt="" />
          </Box>

          <Box>
            <Heading
              className="about__subtitle"
              sx={{
                mb: 2,
                textAlign: "start",
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: "var(--body-font)",
              }}
            >
              I am Marlon
            </Heading>
            <Typography
              className="about__text"
              sx={{
                textAlign: "initial",
                fontFamily: "var(--body-font)",
                fontSize: "var(--normal-font-size)",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
