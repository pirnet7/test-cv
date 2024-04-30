import React from 'react';
import "./NavbarComponent.css";

const Navbar = () => {


  return (
    <>
      <sdx-header
        index='{
        "label": "Home",
        "href": "https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaavabr1"
      }'
        slots='[
          {
            "label": "Search",
            "iconName": "icon-search",
            "slot": "search",
            "scrollable": false
          },
        {
          "label": "Download CV",
          "iconName": "icon-download-cloud",
          "slot": "Download",
          "scrollable": true         
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
        <div slot="search">
          <div>
            <sdx-input type="search" placeholder="Search…"></sdx-input>
          </div>
        </div>

        <div slot="language" className="container">
          <div className="row">
            <div className="col-10 padding-bottom-4">
              <sdx-select placeholder="Choose your language">
                <sdx-select-option value="galaxy-s20">German</sdx-select-option>
                <sdx-select-option value="galaxy-s20-ultra">Italian</sdx-select-option>
                <sdx-select-option value="google-pixel-6-pro">English</sdx-select-option>
                <sdx-select-option value="google-pixel-6-pro">French</sdx-select-option>
              </sdx-select>
            </div>
          </div>
        </div>
      </sdx-header>

    </>
  );
};

export default Navbar;
