import "./QRComponent.css";
import githubQR from "../../assets/githubQR.png";
import linkedInQR from "../../assets/linkedInQR.png";
import intranetQR from "../../assets/intranetQR.png";

const QRCode = () => {
  return (
    <div className="container qrContainer">
      <h2 className="margin-bottom-3 sc-navy text-center">QR Codes</h2>

      <div class="row row--gutters d-flex justify-content-center">
        <div class="col-lg-4">
          <sdx-card
            object-fit="cover"
            layout="interaction"
            image-src={githubQR}
            image-alt="Router"
            href-label="Github Repo"
            label-aria-level="3"
            href="https://github.com/pirnet7/pirnet7"
            target="_blank"
          ></sdx-card>
        </div>
        <div class="col-lg-4">
          <sdx-card
            object-fit="cover"
            layout="interaction"
            image-src={linkedInQR}
            image-alt="Router"
            href-label="LinkedIn Profile"
            label-aria-level="3"
            href="https://www.linkedin.com/in/bruno-varrese-2a8939248/"
            target="_blank"
          ></sdx-card>
        </div>
        <div class="col-lg-4">
          <sdx-card
            object-fit="cover"
            layout="interaction"
            image-src={intranetQR}
            image-alt="Router"
            href-label="Intranet Profile"
            label-aria-level="3"
            href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaavabr1"
            target="_blank"
          ></sdx-card>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
