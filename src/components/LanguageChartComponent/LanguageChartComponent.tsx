import React, { useEffect, useState } from "react";
import "./LanguageChartComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { t } from "i18next";
const LanguageSKill = () => {


  return (
    <sdx-accordion>
      <sdx-accordion-item open>
        <sdx-accordion-item-header>
          <span id="accordion_3" className="h5 margin-0" role="heading" aria-level={2}>{t("aboutme.langGerman.title")}</span>
          <p className="text-b2 text-recommended-max-width">{t("aboutme.languageKnowledge.native")}</p>
        </sdx-accordion-item-header>
        <sdx-accordion-item-body>
          <p aria-labelledby="accordion_3" className="text-recommended-max-width" role="region">{t("aboutme.langGerman.description")}</p>
        </sdx-accordion-item-body>
      </sdx-accordion-item>
      <sdx-accordion-item>
        <sdx-accordion-item-header>
          <span id="accordion_3" className="h5 margin-0" role="heading" aria-level={2}>{t("aboutme.langItalian.title")}</span>
          <p className="text-b2 text-recommended-max-width">{t("aboutme.languageKnowledge.native")}</p>
        </sdx-accordion-item-header>
        <sdx-accordion-item-body>
          <p aria-labelledby="accordion_3" className="text-recommended-max-width" role="region">{t("aboutme.langItalian.description")}</p>
        </sdx-accordion-item-body>
      </sdx-accordion-item>
      <sdx-accordion-item>
        <sdx-accordion-item-header>
          <span id="accordion_4" className="h5 margin-0" role="heading" aria-level={2}>{t("aboutme.langEnglish.title")}</span>
          <p className="text-b2 text-recommended-max-width">{t("aboutme.languageKnowledge.fluent")}</p>
        </sdx-accordion-item-header>
        <sdx-accordion-item-body>
          <p aria-labelledby="accordion_4" className="text-recommended-max-width" role="region">{t("aboutme.langEnglish.description")}</p>
        </sdx-accordion-item-body>
      </sdx-accordion-item>
      <sdx-accordion-item>
        <sdx-accordion-item-header>
          <span id="accordion_5" className="h5 margin-0" role="heading" aria-level={2}>{t("aboutme.langFrench.title")}</span>
          <p className="text-b2 text-recommended-max-width">{t("aboutme.languageKnowledge.beginner")}</p>
        </sdx-accordion-item-header>
        <sdx-accordion-item-body>
          <p aria-labelledby="accordion_5" className="text-recommended-max-width" role="region">{t("aboutme.langFrench.description")}</p>
        </sdx-accordion-item-body>
      </sdx-accordion-item>
    </sdx-accordion>

  );
};

export default LanguageSKill;
