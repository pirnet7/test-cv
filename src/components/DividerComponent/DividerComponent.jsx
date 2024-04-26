import "bootstrap/dist/css/bootstrap.min.css";
import "./DividerComponent.css";

const Divider = () => {
  return (
    <div className="container dividerContainer">
      <hr class="divider divider--mid-gray" aria-hidden="true"></hr>
    </div>
  );
};

export default Divider;
