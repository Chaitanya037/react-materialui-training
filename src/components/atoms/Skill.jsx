import PropTypes from "prop-types";

const Skill = ({name, class_name, icon, percentage}) => {
  return (
    <div className="skills__data">
      <div className="skills__names">
        <i className={`bx ${icon} skills__icon`}></i>
        <span className="skills__name">{name}</span>
      </div>
      <div className={`skills__bar ${class_name}`}></div>
      <div>
        <span className="skills__percentage">{percentage}%</span>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.number,
  class_name: PropTypes.string,
  icon: PropTypes.string,
};

export default Skill;
