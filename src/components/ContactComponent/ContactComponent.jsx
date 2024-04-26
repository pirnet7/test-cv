import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import personalImage from "../../assets/personalImage.png";
import "./ContactComponent.css";

const ContactForm = () => {
  const [textPosition, setTextPosition] = useState("above");

  useEffect(() => {
    const textDiv = document.querySelector(".contactInfo");
    const imageDiv = document.querySelector(".personalImage");

    if (textDiv.offsetTop > imageDiv.offsetTop) {
      setTextPosition("below");
    } else {
      setTextPosition("above");
    }
  }, []);

  return (
    <div className="container">
      <div className="card bg-light mt-4 mx-auto p-1">
        <div className="card-body d-flex flex-column flex-md-row justify-content-around">
          <div className={textPosition === "below" ? "text-center" : ""}>
            <img
              src={personalImage}
              alt="Personal Image"
              className="personalImage mb-3 mb-md-0"
            />
          </div>
          <div className="contactInfo ml-md-4">
            <h2>Kontaktinformationen</h2>
            <p className="mb-2">
              <strong>Telefon:</strong> +123456789
            </p>
            <p className="mb-2">
              <strong>Adresse:</strong> Beispielstraße 123
            </p>
            <p className="mb-2">
              <strong>PLZ:</strong> 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
