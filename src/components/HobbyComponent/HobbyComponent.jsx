import "./HobbyComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Hobby = ({ img, imgAlt, title, description }) => {
  return (
    <div>
      <sdx-card
        label={title}
        label-aria-level="3"
        image-src={img}
        image-alt={imgAlt}
      >
        <p>{description}</p>
      </sdx-card>
    </div>
  );
};

export default Hobby;
