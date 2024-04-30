import React, { useRef } from "react";
import './AboutmeComponent.css';
import LanguageChart from "../LanguageChartComponent/LanguageChartComponent";
import Hobby from "../HobbyComponent/HobbyComponent";

import camping from '../../assets/CampingHobby.jpg';
import sports from '../../assets/SportsHobby.jpg';
import fishing from '../../assets/FishingHobby.jpg';

const Aboutme = () => {
  const germanRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const italianRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const englischRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const frenchRef = useRef<HTMLDivElement>({} as HTMLDivElement);



  return (
    <div className="container ">
      <h2 className="margin-bottom-2 sc-navy">About me</h2>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8 d-flex justify-content-between flex-column margin-bottom-2 margin-top-2">
          <LanguageChart color="iris" length={90} language={"German"} chartRef={germanRef} />
          <LanguageChart color="iris" length={95} language={"Italian"} chartRef={italianRef} />
          <LanguageChart color="iris" length={70} language={"English"} chartRef={englischRef} />
          <LanguageChart color="iris" length={60} language={"French"} chartRef={frenchRef} />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 margin-bottom-2 margin-top-2 sc-navy">
          <sdx-card>
            <div className="d-flex align-items-center margin-bottom-2">

              <h2 className="mb-2">
                My name is Bruno
              </h2>
            </div>

            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-cake"
                size={2}
                sr-hint="Displays the user account"
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                17 years old
              </p>
            </div>
            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-map-pointer"
                size={2}
                sr-hint="Displays the user account"
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                from Zurich
              </p>
            </div>
            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-robot-happy"
                size={2}
                sr-hint="Displays the user account"
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                My hobbys:
              </p>
            </div>
            <sdx-content-slider lg={1} xl={1} ul={1} sr-hint="My three slides">

              <Hobby img={camping} imgAlt={"Image of camping hobby"} title={"Camping"} description={"Immersed in nature, outdoors under the starry sky."} />


              <Hobby img={sports} imgAlt={"Image of sports hobby"} title={"Sports"} description={"Intense sport, team spirit, and pure adrenaline."} />


              <Hobby img={fishing} imgAlt={"Image of fishing hobby"} title={"Fishing"} description={"Tranquility by the water, as the fish bite."} />

            </sdx-content-slider>
          </sdx-card>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
