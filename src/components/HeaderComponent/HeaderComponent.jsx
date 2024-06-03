import React, { useState, useEffect } from "react";
import "./HeaderComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [text, setText] = useState("");
  const [forward, setForward] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="container">
      <sdx-content-slider
        lg="1"
        xl="1"
        ul="1"
        sr-hint="My three slides"
        className="slider"
      >
        <div className="image--frame-light firstSlide d-flex align-items-center justify-content-center">
          <h1 className="text-center">CV Website With SDX!</h1>
          <h1 className="text-center">I'm {text}</h1>
        </div>

        {isMobile ? (
          <div className="image--frame-light secondSlide2 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center">These are my favorite</h1>
            <h1 className="text-center">activities</h1>
          </div>
        ) : (
          <div className="image--frame-light secondSlide d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <h1 className="text-center">These are my favorite</h1>
              <h1 className="text-center">activities</h1>
            </div>
          </div>
        )}
      </sdx-content-slider>
    </div>
  );
};

export default Header;
