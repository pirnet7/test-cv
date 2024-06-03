import "./FooterComponent.css";
const Footer = () => {
  const copyToClipboardFunction = () => {
    const email = "bruno.varrese@swisscom.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        document.querySelector("sdx-header").showNotification({
          description: "Email copied to clipboard!",
          label: "More on Intranet",
          href: "https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaavabr1",
          ariaLabel: "More info about maintenance work",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="d-flex justify-content-center">
          <p>
            &copy; 2024{" "}
            <button className="contactButton" onClick={copyToClipboardFunction}>
              Bruno Varrese
            </button>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
