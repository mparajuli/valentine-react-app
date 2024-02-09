import "./Success.css";
import { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";

const Success = ({ onClose }) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pjx55hr",
      "template_mrh6c1r",
      form.current,
      "uwumCxG7wp7-yjTLc"
    );

    e.target.reset();
  };

  return (
    <div className="success-container">
      <p className="success-message">
        Your Valentine&apos;s treasures are en route, my lady of the realm!💝 A
        joyous Valentine&apos;s Day to thee!😊
      </p>
      <br />
      <p className="success-text">Send a secretive message to the king!😉</p>
      <form className="message-form" ref={form} onSubmit={sendEmail}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Her majesty's name"
          required
        />
        <textarea
          className="form-textarea"
          name="message"
          rows="7"
          placeholder="The queen's word to the king..."
          required
        ></textarea>
        <div className="buttons">
          <button className="back-button" onClick={onClose}>
            Retreat
          </button>
          <button className="send-button" type="submit">
            Dispatch Raven
          </button>
        </div>
      </form>
    </div>
  );
};

// Add prop validation
Success.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose prop must be a function and is required
};

export default Success;
