import { useEffect } from "react";
import "./NavbarComponent.css";
import { useTranslation } from 'react-i18next';
import PDFGenerator from "../PDFGeneratorComponent/PDFGeneratorComponent";

const locales = {
  en: { title: 'English' },
  de: { title: 'Deutsch' },
  it: { title: 'Italienisch' },
  fr: { title: 'Français' }
};

const Navbar = () => {
  const { t, i18n } = useTranslation();


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
          "label": "Language",
          "iconName": "icon-network",
          "slot": "language",
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
              "href": "https://www.linkedin.com/in/bruno-varrese-70449a25a/"
            }
          ]
        }
      }'
      >
        <div slot="download">
          <div className="d-flex align-items-center">
            <div className="downloadLink">
              <PDFGenerator />
            </div>
          </div>
        </div>

        <div slot="language" className="container">
          <div className="row">
            <div className="col-10 padding-bottom-4">
              <sdx-input-group placeholder="Choose your language">
                {Object.keys(locales).map((locale) => (
                  <div className="row">
                    <div className="col m-2">
                      <sdx-input-item key={locale} onClick={() => i18n.changeLanguage(locale)}>
                        {locales[locale as keyof typeof locales].title}
                      </sdx-input-item>
                    </div>
                  </div>
                ))}

              </sdx-input-group>
            </div>
          </div>
        </div>
      </sdx-header>
    </>
  );
};

export default Navbar;
