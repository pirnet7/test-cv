import "./ProjectsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../ProjectComponent/ProjectComponent";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <Project
          title="NexCC"
          date="12.02.24 - 24.07.24"
          skills="js, html, css"
          development="Frontend"
          description="dhfhhdhfhhg"
        />

        <Project
          title="NexCC"
          date="12.02.24 - 24.07.24"
          skills="js, html, css"
          development="Frontend"
          description="dhfhhdhfhhg"
        />

        <Project
          title="NexCC"
          date="12.02.24 - 24.07.24"
          skills="js, html, css"
          development="Frontend"
          description="dhfhhdhfhhg"
        />
      </div>
    </div>
  );
};

export default Projects;
