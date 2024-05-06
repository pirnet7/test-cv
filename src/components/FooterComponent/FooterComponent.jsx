import React from "react";
import "./FooterComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const copyToClipboard = () => {
    const email = "bruno.varrese@swisscom.com";
    navigator.clipboard.writeText(email);

    document.querySelector("sdx-header").showNotification({
      description: "Contact Copied To Clipboard!",
    });
    this.remove();
  };

  return (
    <div>
      <footer className="footer footer--compact">
        <div className="container">
          <a href="javascript:;" className="logo" tabIndex="-1">
            <span className="logo-lifeform" aria-label="Swisscom Logo"></span>
          </a>
          <ul className="nav-items">
            <li className="nav-item">
              <button className="nav-link" onClick={copyToClipboard}>
                {t("footer.contact")}
              </button>
            </li>
            <li className="nav-item">
              <a
                href="https://forms.office.com/e/nn3WdKBhNL"
                target="_blank"
                className="nav-link"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
