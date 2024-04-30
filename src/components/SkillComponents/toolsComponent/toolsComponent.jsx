import "./toolsComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ToolSkill = () => {
  return (
    <div>
      <sdx-pie-chart
        value="Dev"
        description="Tools"
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
