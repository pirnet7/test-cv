import "bootstrap/dist/css/bootstrap.min.css";
import "./DividerComponent.css";

const Divider = () => {
  return (
    <div className="container dividerContainer">
      <hr className="divider divider--mid-gray" aria-hidden="true"></hr>
    </div>
  );
};

export default Divider;
