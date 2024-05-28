import React, { useEffect, useState } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LanguageSKill = () => {


  return (
    <div>
      <sdx-accordion>
        <sdx-accordion-item open>
          <sdx-accordion-item-header>
            <span id="accordion_3" className="h4 margin-0" role="heading">German</span>
            <p className="text-b1 text-recommended-max-width">Native language</p>
          </sdx-accordion-item-header>
          <sdx-accordion-item-body>
            <p aria-labelledby="accordion_3" className="text-recommended-max-width" role="region">German is my mother tongue. It has accompanied me throughout my life since birth and is an integral part of my everyday life.</p>
          </sdx-accordion-item-body>
        </sdx-accordion-item>
        <sdx-accordion-item>
          <sdx-accordion-item-header>
            <span id="accordion_3" className="h4 margin-0" role="heading">Italian</span>
            <p className="text-b1 text-recommended-max-width">Native language</p>
          </sdx-accordion-item-header>
          <sdx-accordion-item-body>
            <p aria-labelledby="accordion_3" className="text-recommended-max-width" role="region">I have been speaking Italian since birth. This language is my mother tongue, learned from my parents.</p>
          </sdx-accordion-item-body>
        </sdx-accordion-item>
        <sdx-accordion-item>
          <sdx-accordion-item-header>
            <span id="accordion_4" className="h4 margin-0" role="heading">English</span>
            <p className="text-b1 text-recommended-max-width">Fluent</p>
          </sdx-accordion-item-header>
          <sdx-accordion-item-body>
            <p aria-labelledby="accordion_4" className="text-recommended-max-width" role="region">Although I have been speaking English since the third grade, I would like to master it better. While it is a solid part of my everyday life, I am working on deepening my skills.</p>
          </sdx-accordion-item-body>
        </sdx-accordion-item>
        <sdx-accordion-item>
          <sdx-accordion-item-header>
            <span id="accordion_5" className="h4 margin-0" role="heading">French</span>
            <p className="text-b1 text-recommended-max-width">Beginner</p>
          </sdx-accordion-item-header>
          <sdx-accordion-item-body>
            <p aria-labelledby="accordion_5" className="text-recommended-max-width" role="region">I have been speaking French since the fourth grade, which is about five years now. I learned the language in school.</p>
          </sdx-accordion-item-body>
        </sdx-accordion-item>
      </sdx-accordion>
    </div>
  );
};

export default LanguageSKill;
