import PropTypes from "prop-types";
import "./HeartImage.css";

function HeartImage({ position }) {
  const style = {
    top: position.y,
    left: position.x,
  };

  return <div className="heart-image" style={style}></div>;
}

// Prop types validation
HeartImage.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

// Default props
HeartImage.defaultProps = {
  position: { x: 0, y: 0 },
};

export default HeartImage;
