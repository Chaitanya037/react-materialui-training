import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Heading = ({ children, ...props }) => {
  return (
    <>
      <Typography variant="h4" component="h2" align="center"  sx={{fontFamily: 'var(--h2-font-size)', fontWeight: 'bold', mb: 6, mt: 2}} {...props}>
        {children}
      </Typography>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
