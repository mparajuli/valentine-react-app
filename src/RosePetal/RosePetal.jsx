import React from "react";
import "./RosePetal.css";

function RosePetal({ position }) {
  const style = {
    top: position.y,
    left: position.x,
  };

  return <div className="rose-petal" style={style}></div>;
}

export default RosePetal;
