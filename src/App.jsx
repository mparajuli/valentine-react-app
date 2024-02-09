import { useState } from "react";
import Navbar from "./Navbar/Navbar.jsx";
import PickUpLines from "./PickUpLines/PickUpLines.jsx";
import Proposal from "./Proposal/Proposal.jsx";
import RosePetal from "./RosePetal/RosePetal.jsx";
import loveImage from "./assets/love.png";
import VirtualGift from "./VirtualGift/VirtualGift.jsx";
import "./App.css";

function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [showVirtualGift, setShowVirtualGift] = useState(false);
  const [valentineResponse, setValentineResponse] = useState("");

  const handleProposalResponse = (response) => {
    setValentineResponse(response);
    setShowVirtualGift(response === "Yes");
    // Add virtual-gift-active class to body when VirtualGift component is rendered
    if (response === "Yes") {
      document.body.classList.add("virtual-gift-active");
    } else {
      document.body.classList.remove("virtual-gift-active");
    }
  };

  const numPetals = 200;

  // Generate random positions for each rose petal
  const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };

  // Create an array of rose petal components with random positions
  const rosePetals = Array.from({ length: numPetals }, (_, index) => (
    <RosePetal key={index} position={getRandomPosition()} />
  ));

  return (
    <>
      <Navbar />
      {rosePetals}
      <img src={loveImage} alt="Love" className="love-image" />
      <div className="App">
        <h1>⚔️Game of Valentine🌹</h1>
        {!showProposal && !showVirtualGift && (
          <PickUpLines onProposal={() => setShowProposal(true)} />
        )}
        {showProposal && !showVirtualGift && (
          <Proposal onResponse={handleProposalResponse} />
        )}
        {showVirtualGift && (
          <VirtualGift valentineResponse={valentineResponse} />
        )}
      </div>
    </>
  );
}

export default App;
