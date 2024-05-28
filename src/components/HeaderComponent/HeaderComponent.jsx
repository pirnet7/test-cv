import React, { useState, useEffect } from "react";
import "./HeaderComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [text, setText] = useState("");
  const [forward, setForward] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const targetTexts = [" Bruno", "a developer"];

    const typeText = () => {
      const currentTarget = targetTexts[currentIndex];
      if (forward) {
        if (text !== currentTarget) {
          setText(currentTarget.substring(0, text.length + 1));
        } else {
          setTimeout(() => {
            setForward(false);
          }, 1000);
        }
      } else {
        if (text !== "") {
          setText(currentTarget.substring(0, text.length - 1));
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % targetTexts.length);
          setForward(true);
        }
      }
    };

    const intervalId = setInterval(typeText, 100);

    return () => clearInterval(intervalId);
  }, [text, forward, currentIndex]);

  return (
    <div className="container header-container">
      <div className="header d-flex flex-column align-items-center justify-content-around margin-bottom-2">
        <div>
          <h1 className="text-light text-center">CV Website with SDX</h1>
          <h2 className="text-light text-center">I'm {text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
