import { useState } from "react";
import "./Proposal.css";
import PropTypes from "prop-types";

function Proposal({ onResponse }) {
  const [yesButtonSize, setYesButtonSize] = useState(16);

  const handleResponse = (response) => {
    onResponse(response);
    if (response === "No") {
      setYesButtonSize(yesButtonSize + 16); // Increase the size of the "Yes" button by 4 units when "No" is clicked
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <p>
          My queen, I believe I have conquered your heart with laughter and
          charm throughout this journey in Seven Kingdoms of Pick-up Lines. Now,
          in the spirit of unity and love, I ask: will you be my Valentine and
          grant me the honor of being your king?
        </p>
        <div className="response-buttons">
          <button
            onClick={() => handleResponse("Yes")}
            className="response-button yes"
            style={{ fontSize: `${yesButtonSize}px` }}
          >
            Yes
          </button>
          <button
            onClick={() => handleResponse("No")}
            className="response-button no"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

// Add prop validation
Proposal.propTypes = {
  onResponse: PropTypes.func.isRequired, // onResponse prop must be a function and is required
};

// Add default props
Proposal.defaultProps = {
  onResponse: () => {}, // Default function does nothing
};

export default Proposal;
