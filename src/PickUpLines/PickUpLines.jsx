import { useState } from "react";
import "./PickUpLines.css";
import PropTypes from "prop-types";

const pickupLines = [
  {
    kingdom: "The Heartshire❤️",
    line: "Are you a dragon, my lady? Because you've ignited a fire in my heart!🐉🔥",
  },
  {
    kingdom: "The Romance💞",
    line: "Is your name the Iron Throne? Because I'd gladly kneel before you.👑💖",
  },
  {
    kingdom: "The Flirtlands😜",
    line: "Are you a candle? Because you light up my realm.🕯️✨",
  },
  {
    kingdom: "The Passionlands😘",
    line: "Do you believe in love at first sight, or do you need to look at my profile again?👀💘",
  },
  {
    kingdom: "The Lightheart💓",
    line: "Well, here I am! What are your other two wishes, my lady?✨💫",
  },
  {
    kingdom: "The Lovelands💏",
    line: "Do you have a sunburn, or are you always this hot?☀️🔥",
  },
  {
    kingdom: "Charmfield😊",
    line: "It's Valentine's Day! You know what's on menu? It's me and you, my little dove!🕊️🍷",
  },
];

function PickUpLines({ onProposal }) {
  const [currentKingdomIndex, setCurrentKingdomIndex] = useState(-1);

  const handleNextKingdom = () => {
    setCurrentKingdomIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousKingdom = () => {
    setCurrentKingdomIndex((prevIndex) => prevIndex - 1);
  };

  const handleProposal = () => {
    onProposal();
  };

  const currentKingdom = pickupLines[currentKingdomIndex];

  return (
    <div className="card">
      <div className="card-body">
        {currentKingdomIndex === -1 ? (
          <>
            <h2>
              Greetings, fair maiden!🙇‍♂️ Shall we journey through the Seven
              Kingdoms of Pick-Up Lines and uncover treasures of laughter and
              romance?🏰
            </h2>
            <button onClick={handleNextKingdom} className="join-button">
              Join the Quest
            </button>
          </>
        ) : (
          <>
            <div className="pickup-line">
              <h3>{currentKingdom.kingdom}</h3>
              <p>{currentKingdom.line}</p>
            </div>
            <div className="navigation-buttons">
              <button
                onClick={handlePreviousKingdom}
                disabled={currentKingdomIndex === 0}
              >
                Previous Kingdom
              </button>
              <button
                onClick={handleNextKingdom}
                disabled={currentKingdomIndex === pickupLines.length - 1}
              >
                Next Kingdom
              </button>
            </div>
            {currentKingdomIndex === pickupLines.length - 1 && (
              <button onClick={handleProposal}>Continue the Quest</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// Add prop validation
PickUpLines.propTypes = {
  onProposal: PropTypes.func.isRequired, // onProposal prop must be a function and is required
};

export default PickUpLines;
