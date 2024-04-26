import "./SkillComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Skill = () => {
  return (
    <div>
      <sdx-pie-chart
        value="Languages"
        description="Programming"
        data='[{
    "value": 3,
    "color": "azure",
    "label": "Photos (3 GB)",
    "srHint": "3 gigabytes of photos out of 30 gigabytes"
  }, {
    "value": 3,
    "color": "turquoise",
    "label": "Files (3 GB)",
    "srHint": "3 gigabytes of files out of 30 gigabytes"
  }, {
    "value": 6,
    "color": "iris",
    "label": "Videos (6 GB)",
    "srHint": "6 gigabytes of videos out of 30 gigabytes"
  }, {
    "value": 3,
    "color": "orchid",
    "label": "Music (3 GB)",
    "srHint": "3 gigabytes of music out of 30 gigabytes"
  }]'
      ></sdx-pie-chart>
    </div>
  );
};

export default Skill;
