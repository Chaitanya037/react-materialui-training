import PropTypes from "prop-types";

const Heading = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
