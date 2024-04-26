import "./programmingLangComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProgrammingLangSkill = () => {
  return (
    <div>
      <sdx-pie-chart
        value="Dev"
        description="Languages"
        data='[{
    "value": 7,
    "color": "azure",
    "label": "JavaScript"
  }, {
    "value": 4,
    "color": "turquoise",
    "label": "Java"
  }, {
    "value": 5,
    "color": "iris",
    "label": "Python"
  }, {
    "value": 4,
    "color": "orchid",
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
