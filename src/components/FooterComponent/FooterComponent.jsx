import "./FooterComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer footer--compact">
        <div class="container">
          <a href="javascript:;" class="logo" tabindex="-1">
            <span class="logo-lifeform" aria-label="Swisscom Logo"></span>
          </a>
          <ul class="nav-items">
            <li class="nav-item">
              <a href="javascript:;" class="nav-link nav-link--active">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link">
                Terms of use
              </a>
            </li>
            <li class="nav-item">
              <a href="javascript:;" class="nav-link">
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
