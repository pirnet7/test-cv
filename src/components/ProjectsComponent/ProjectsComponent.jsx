import "./ProjectsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../ProjectComponent/ProjectComponent";

const Projects = () => {
  const xlValue = 3;
  const ulValue = 3;

  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy">Visited Projects</h2>

      <sdx-content-slider xl={xlValue} ul={ulValue} centered-slide="1">
        <Project
          title="Apps Team"
          date="12.02.24 - 02.08.24"
          skills="React, TypeScript"
          development="Frontend"
          description="We are a young team passionate about designing and developing high-quality web applications."
          className="image--frame-light"
        />

        <Project
          title="Nex-CC"
          date="11.04.23 - 29.02.24"
          skills="SDX, Vue-JS"
          development="Frontend"
          description="NexCC, the competence center within NEX, develops and maintains key applications for the entire company and provides comprehensive software and hardware support."
          className="image--frame-light"
        />
        <Project
          title="DNA@Datalake"
          date="07.11.22 - 06.04.23"
          skills="Docker, Ansible, Shell"
          development="Frontend"
          description="Get to know big data platforms (Hadoop, Kubernetes) and deploy container images. Apply your knowledge by enhancing Spark images and automating CI/CD."
          className="image--frame-light"
        />
        <Project
          title="DNA@Onboarding "
          date="15.08.22 - 06.11.22"
          skills="HTML, CSS, Git"
          development="Frontend"
          description="During a three-month onboarding program, you will acquire important skills for working on various projects in different teams at Swisscom."
          className="image--frame-light"
        />
      </sdx-content-slider>
    </div>
  );
};

export default Projects;
