import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Skill = ({ name, percentage, children }) => {
  return (
    <>
      <div className="skills__data">
        <div className="skills__names">
            {children}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "var(--font-semi)",
              fontFamily: "var(--body-font)",
              fontSize: "var(--normal-font-size)",
            }}
          >
            {name}
          </Typography>
        </div>
        <div>
          <span className="skills__percentage">{percentage}%</span>
        </div>
      </div>
      <BorderLinearProgress
        sx={{ marginBottom: "var(--mb-4)" }}
        variant="determinate"
        value={percentage}
      />
    </>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.number,
  class_name: PropTypes.string,
  children: PropTypes.object,
};

export default Skill;
