import PropTypes from "prop-types";

const Heading = ({ classes, children }) => {
  const classUsed = classes ? ` ${classes}` : "";
  return <h2 className={`section-title${classUsed}`}>{children}</h2>;
};

Heading.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.string,
};

export default Heading;
