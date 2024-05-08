import "bootstrap/dist/css/bootstrap.min.css";
import "./SkillsComponent.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy text-center">
        {t("skills.title")}
      </h2>

      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-xl-5">
          <div
            id="programmingLangTable"
            className="table table--responsive table--border"
          >
            <div className="table__wrapper">
              <table className="table">
                <thead className="thead">
                  <tr>
                    <th>{t("skills.langTitle")}</th>
                    <th>{t("skills.assessmentTitle")}</th>
                    <th>{t("skills.experienceTitle")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("skills.htmlcss")}</td>
                    <td>{t("skills.assessment.expert")}</td>
                    <td>{t("skills.experiences.threeYears")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.js")}</td>
                    <td>{t("skills.assessment.advanced")}</td>
                    <td>{t("skills.experiences.twoYears")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.ts")}</td>
                    <td>{t("skills.assessment.beginner")}</td>
                    <td>{t("skills.experiences.fourMonths")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.mysql")}</td>
                    <td>{t("skills.assessment.advanced")}</td>
                    <td>{t("skills.experiences.twoYears")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-5 mt-4 mt-md-0">
          <div
            id="toolsTable"
            className="table table--responsive table--border"
          >
            <div className="table__wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t("skills.toolTitle")}</th>
                    <th>{t("skills.assessmentTitle")}</th>
                    <th>{t("skills.experienceTitle")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("skills.vue")}</td>
                    <td>{t("skills.assessment.beginner")}</td>
                    <td>{t("skills.experiences.fourMonths")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.react")}</td>
                    <td>{t("skills.assessment.advanced")}</td>
                    <td>{t("skills.experiences.sixMonths")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.docker")}</td>
                    <td>{t("skills.assessment.expert")}</td>
                    <td>{t("skills.experiences.twoYears")}</td>
                  </tr>
                  <tr>
                    <td>{t("skills.bootstrap")}</td>
                    <td>{t("skills.assessment.expert")}</td>
                    <td>{t("skills.experiences.twoYears")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
