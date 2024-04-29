import "./NavbarComponent.css";
import { useEffect, useState } from "react";



const Navbar = () => {
  return (
    <>
      <sdx-header
        index='{
        "label": "Home",
        "href": "/"
      }'
        slots='[
          {
            "label": "Search",
            "iconName": "icon-search",
            "slot": "search",
            "scrollable": false
          },
        {
          "label": "LinkedIn",
          "iconName": "icon-linkedin",
          "slot": "LinkedIn",
          "scrollable": true,
          "href": "https://www.linkedin.com/in/bruno-varrese-70449a25a/"
        }
        
      ]'
        navigation='{
        "tertiary": {
          "children": [
            {
              "label": "Git Repository",
              "href": "https://github.com/pirnet7/pirnet7"
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
      </sdx-header>

    </>
  );
};

export default Navbar;
