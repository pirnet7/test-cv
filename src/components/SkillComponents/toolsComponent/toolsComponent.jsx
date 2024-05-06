import "./toolsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const ToolSkill = () => {
  const { t } = useTranslation();

  return (
    <div>
      <sdx-pie-chart
        value="Dev"
        description={t("skills.skillTools")}
        data='[{
    "value": 5,
    "color": "azure",
    "label": "Vue"
  }, {
    "value": 8,
    "color": "turquoise",
    "label": "React"
  }, {
    "value": 9,
    "color": "iris",
    "label": "Docker"
  }, {
    "value": 9,
    "color": "orchid",
    "label": "Bootstrap"
  }]'
      ></sdx-pie-chart>
    </div>
  );
};

export default ToolSkill;
