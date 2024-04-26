import "./NavbarComponent.css";

const Navbar = () => {
  return (
    <sdx-header
      navigation='{
    "main": {
      "label": "Navigation",
      "children": [
        {
          "label": "Mobile",
          "href": "/"
        },
        {
          "label": "Internet",
          "href": "/"
        },
        {
          "label": "TV",
          "href": "/"
        }
      ]
    }
  }'
    ></sdx-header>
  );
};

export default Navbar;
