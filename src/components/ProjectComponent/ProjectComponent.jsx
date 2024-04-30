import "./ProjectComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = ({ title, date, skills, development, description }) => {
  return (
    <div className="mb-4 col-lg-4 col-md-6 col-sm-12 sc-navy">
      <sdx-card label={title}>
        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-calendar"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>Date:</strong> {date}
          </p>
        </div>

        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-strong-arm"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>Skills:</strong> {skills}
          </p>
        </div>

        <div className="d-flex align-items-center margin-bottom-2">
          <sdx-icon
            icon-name="icon-workstation"
            size="2"
            sr-hint="Displays the user account"
          ></sdx-icon>
          <p className="mb-0 margin-left-1">
            <strong>Development:</strong> {development}
          </p>
        </div>

        <div>
          <div className="d-flex align-items-center margin-bottom-2">
            <sdx-icon
              icon-name="icon-edit"
              size="2"
              sr-hint="Displays the user account"
            ></sdx-icon>
            <p className="mb-0 margin-left-1">
              <strong>Describtion:</strong> <br />
            </p>
          </div>
          <p className="margin-left-4">{description}</p>
        </div>
      </sdx-card>
    </div>
  );
};

export default Project;
