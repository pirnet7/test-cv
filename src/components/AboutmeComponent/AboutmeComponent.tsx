import './AboutmeComponent.css';
import LanguageSKill from "../LanguageChartComponent/LanguageChartComponent";


const Aboutme = () => {

  return (
    <div className="container">
      <h2 className="margin-bottom-2 sc-navy text-center">Languages</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <LanguageSKill />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
