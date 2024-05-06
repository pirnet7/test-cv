import "./programmingLangComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const ProgrammingLangSkill = () => {
  const { t } = useTranslation();

  return (
    <div>
      <sdx-pie-chart
        value="Dev"
        description={t("skills.skillLanguages")}
        data='[{
    "value": 7,
    "color": "azure",
    "label": "JavaScript"
  }, {
    "value": 4,
    "color": "turquoise",
    "label": "Java"
  }, {
    "value": 4,
    "color": "iris",
    "label": "Typescript"
  },  {
    "value": 7,
    "color": "orchid",
    "label": "MySQL"
  }]'
      ></sdx-pie-chart>
    </div>
  );
};

export default ProgrammingLangSkill;
