/* eslint-disable react/no-unknown-property */
import { Box, Button, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import perfil from "../../assets/img/perfil.png";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <Paper
        component={"section"}
        elevation={0}
        data-aos="fade-down"
        className="home bd-grid"
        id="home"
        sx={{mt: 4}}
      >
        <Box className="home__data">
          <Typography
            className="home__title"
            component="h1"
            sx={{
              fontSize: "var(--big-font-size)",
              fontWeight: "bold",
              fontFamily: '"Poppins", sans-serif',
              mb: "2.5rem",
            }}
          >
            Hi,
            <br /> I am <span className="home__title-color">Chaitanya</span>
            <br /> Web Designer
          </Typography>
          <Button
            variant="container"
            sx={{
              backgroundColor: "var(--first-color)",
              color: "#fff",
              padding: "0.75rem 2.5rem",
              fontWeight: "var(--font-semi)",
              borderRadius: "0.5rem",
              transition: "0.3s",
            }}
          >
            Contact
          </Button>
        </Box>
        <Stack direction={"row"} className="home__social">
          <a href="" className="home__social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="" className="home__social-icon">
            <i className="bx bxl-behance"></i>
          </a>
          <a href="" className="home__social-icon">
            <i className="bx bxl-github"></i>
          </a>
        </Stack>
        <Box
          className="home__img"
          sx={{
            position: "absolute",
            width: "450px",
            height: "auto",
            display: "flex",
            bottom: "33%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            className="home__blob"
            viewBox="0 0 479 467"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image
                className="home__blob-img"
                x="50"
                y="60"
                href={perfil}
                width="300px"
                height="100%"
              />
            </g>
          </svg>
        </Box>
      </Paper>
    </>
  );
};

export default Intro;
