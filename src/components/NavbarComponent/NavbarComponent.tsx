import "./NavbarComponent.css";
import CopyToClipboard from "../CopyToClipboardComponent/CopyToClipboardComponent";
import PDFGenerator from "../PDFGeneratorComponent/PDFGeneratorComponent";



const Navbar = () => {

  return (
    <>
      <sdx-header
        index={{
          label: "Home",
          href: "https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaavabr1"
        }}
        slots='[
        {
          "label": "Download CV",
          "iconName": "icon-download-cloud",
          "slot": "download",
          "scrollable": true,
          "href": "javascript:;"      
        },
        {
          "label": "Feedback",
          "iconName": "icon-thumb-up",
          "slot": "feedback",
          "scrollable": true
        }, 
        {
          "label": "Contact",
          "iconName": "icon-e-mail",
          "slot": "contact",
          "scrollable": true
        }
        
      ]'
        navigation='{
        "tertiary": {
          "children": [
            {
              "iconName": "icon-folder",
              "label": "Git Repository",
              "href": "https://github.com/pirnet7/pirnet7"
            },
            {
              "iconName": "icon-linkedin",
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/in/bruno-varrese-2a8939248/"
            }
          ]
        }
      }'
      >
        <div slot="download">
          <div className="d-flex align-items-center">
            <div className="item">
              <PDFGenerator />
            </div>
          </div>
        </div>

        <div slot="feedback">
          <div className="d-flex align-items-center">
            <div className="item">
              <a href="https://forms.office.com/e/nn3WdKBhNL"
                target="_blank"
                className="nav-link">Give a feedback!</a>
            </div>
          </div>
        </div>

        <div slot="contact">
          <div className="d-flex align-items-center">
            <div className="item">
              <CopyToClipboard />
            </div>
          </div>
        </div>

      </sdx-header>
    </>
  );
};

export default Navbar;
