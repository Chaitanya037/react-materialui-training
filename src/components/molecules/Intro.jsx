/* eslint-disable react/no-unknown-property */
import { Box, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        sx={{ mt: 4 }}
      >
        <Box className="home__data">
          <Typography
            component="h1"
            sx={{
              fontSize: "var(--big-font-size)",
              fontWeight: "bold",
              fontFamily: '"Poppins", sans-serif',
              mb: "2.5rem",
            }}
          >
            Hi,
            <br /> I am{" "}
            <Typography
              component="span"
              sx={{
                fontSize: "var(--big-font-size)",
                fontWeight: "bold",
                fontFamily: '"Poppins", sans-serif',
                color: "var(--first-color)",
              }}
            >
              Chaitanya
            </Typography>
            <br /> Web Designer
          </Typography>
          <Link
            className="button"
            underline="none"
            color="success"
            sx={{ fontWeight: "var(--font-semi)" }}
          >
            Contact
          </Link>
        </Box>
        <Box>
          <Link
            href=""
            underline="none"
            sx={{
              mb: 2,
              mr: 4,
              fontSize: "1.5rem",
              "&:hover": { color: "var(--first-color)" },
            }}
            color="var(--second-color)"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href=""
            underline="none"
            sx={{
              mb: 2,
              mr: 4,
              fontSize: "1.5rem",
              "&:hover": { color: "var(--first-color)" },
            }}
            color="var(--second-color)"
          >
            <InstagramIcon fontSize="large" />
          </Link>
          <Link
            href=""
            underline="none"
            sx={{
              mb: 2,
              mr: 4,
              fontSize: "1.5rem",
              "&:hover": { color: "var(--first-color)" },
            }}
            color="var(--second-color)"
          >
            <GitHubIcon fontSize="large" />
          </Link>
        </Box>
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
