import "./speakLanguageComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguagesSkill = () => {
  return (
    <div>
      <sdx-pie-chart
        value="Speaking"
        description="Languages"
        data='[{
    "value": 9,
    "color": "azure",
    "label": "Italian"
  }, {
    "value": 8,
    "color": "turquoise",
    "label": "German"
  }, {
    "value": 7,
    "color": "iris",
    "label": "English"
  }, {
    "value": 4,
    "color": "orchid",
    "label": "French"
  }]'
      ></sdx-pie-chart>
    </div>
  );
};

export default LanguagesSkill;
