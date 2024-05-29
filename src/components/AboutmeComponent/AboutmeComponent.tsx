import './AboutmeComponent.css';
import LanguageSKill from "../LanguageChartComponent/LanguageChartComponent";
import Hobby from "../HobbyComponent/HobbyComponent";

import camping from '../../assets/CampingHobby.jpg';
import sports from '../../assets/SportsHobby.jpg';
import fishing from '../../assets/FishingHobby.jpg';

const Aboutme = () => {

  return (
    <div className="container">
      <h2 className="margin-bottom-2 sc-navy">About Me</h2>
      <div className="row">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <LanguageSKill />
        </div>

        <div className="col-lg-5">
          <sdx-card>
            <div className="d-flex align-items-center mb-3">
              <h2 className="mb-0">
                My name is Bruno
              </h2>
            </div>

            <div className="d-flex flex-row align-items-center mb-3">
              <div>
                <sdx-icon
                  icon-name="icon-robot-happy"
                  size={2}
                ></sdx-icon>
              </div>
              <div>
                <p className="mb-0 ml-1">
                  My hobbies
                </p>
              </div>

            </div>
            <sdx-content-slider sm={1} xl={1} ul={1} sr-hint="My three slides">
              <Hobby img={camping} imgAlt={"Image of camping hobby"} title="camping" description="In the midst of nature, under the starry sky." />
              <Hobby img={sports} imgAlt={"Image of sports hobby"} title="Sports" description="Intense sports, team spirit, and pure adrenaline." />
              <Hobby img={fishing} imgAlt={"Image of fishing hobby"} title="Fishing" description="Peace by the water when the fish are biting." />
            </sdx-content-slider>
          </sdx-card>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
