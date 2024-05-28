import "./CopyToClipboardComponent.css";

const CopyToClipboard = () => {
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
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <button
          className="copyButton d-flex align-items-center justify-content-center"
          onClick={copyToClipboardFunction}
        >
          <sdx-icon
            icon-name="icon-copy"
            size="1"
            sr-hint="Displays the user account"
          ></sdx-icon>
        </button>
        <div className="copyText d-flex align-items-center">
          bruno.varrese@swisscom.com
        </div>
      </div>
    </div>
  );
};

export default CopyToClipboard;
