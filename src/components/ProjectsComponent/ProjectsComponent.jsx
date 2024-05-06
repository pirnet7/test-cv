import "./ProjectsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "../ProjectComponent/ProjectComponent";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const xlValue = 3;
  const ulValue = 3;

  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy">{t("projects.title")}</h2>

      <sdx-content-slider xl={xlValue} ul={ulValue} centered-slide="3">
        <Project
          title="DNA@Onboarding "
          date="15.08.22 - 06.11.22"
          skills="HTML, CSS, Git"
          development="Frontend"
          description={`${t("projects.onboardingProject")}`}
          className="image--frame-light"
        />
        <Project
          title="DNA@Datalake"
          date="07.11.22 - 06.04.23"
          skills="Docker, Ansible, Shell"
          development="Frontend"
          description={`${t("projects.datalakeProject")}`}
          className="image--frame-light"
        />

        <Project
          title="Nex-CC"
          date="11.04.23 - 29.02.24"
          skills="SDX, Vue-JS"
          development="Frontend"
          description={`${t("projects.nexCCProject")}`}
          className="image--frame-light"
        />

        <Project
          title="Apps Team"
          date="12.02.24 - 02.08.24"
          skills="React, TypeScript"
          development="Frontend"
          description={`${t("projects.appsTeamProject")}`}
          className="image--frame-light"
        />
      </sdx-content-slider>
    </div>
  );
};

export default Projects;
