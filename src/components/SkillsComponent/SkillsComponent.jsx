import "bootstrap/dist/css/bootstrap.min.css";
import ProgrammingLangSkill from "../SkillComponents/programmingLangComponent/programmingLangComponent/programmingLangComponent";
import ToolSkill from "../SkillComponents/toolsComponent/toolsComponent";
import LanguagesSkill from "../SkillComponents/speakLanguageComponent/speakLanguageComponent";

const Skills = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
          <ProgrammingLangSkill />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
          <ToolSkill />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
          <LanguagesSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
