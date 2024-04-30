import "./ProjectsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../ProjectComponent/ProjectComponent";

const Projects = () => {
  const xlValue = 3;
  const ulValue = 3;

  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy"> Projects</h2>

      <sdx-content-slider xl={xlValue} ul={ulValue} centered-slide="3">
        <Project
          title="DNA@Onboarding "
          date="15.08.22 - 06.11.22"
          skills="HTML, CSS, Git"
          development="Frontend"
          description="During a three-month onboarding programme, you will acquire important skills for working on various projects in different teams at Swisscom."
          className="image--frame-light"
        />
        <Project
          title="DNA@Datalake"
          date="07.11.22 - 06.04.23"
          skills="Docker, Ansible, Shell"
          development="Frontend"
          description="Learn about big data platforms (Hadoop, Kubernetes) and deploy container images. Apply your knowledge by improving Spark images and automating CI/CD."
          className="image--frame-light"
        />

        <Project
          title="Nex-CC"
          date="11.04.23 - 29.02.24"
          skills="SDX, Vue-JS"
          development="Frontend"
          description="NexCC, the competence centre within NEX, develops and maintains important applications for the entire company and offers comprehensive software and hardware support."
          className="image--frame-light"
        />

        <Project
          title="Apps Team"
          date="12.02.24 - 02.08.24"
          skills="React, TypeScript"
          development="Frontend"
          description="We are a young team that is passionate about the design and development of high-quality web applications."
          className="image--frame-light"
        />
      </sdx-content-slider>
    </div>
  );
};

export default Projects;
