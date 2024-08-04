import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Heading = ({ children, ...props }) => {
  return (
    <>
      <Typography variant="h4" component="h2"  sx={{fontFamily: 'var(--h2-font-size)', fontWeight: 'bold'}} {...props}>
        {children}
      </Typography>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
