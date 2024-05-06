import "./CommonQuestions.css";
import { useTranslation } from "react-i18next";

const CommonQuestions = () => {
  const { t } = useTranslation();

  return (
    <div className="container commonQuestions">
      <h2 className="margin-bottom-3 sc-navy text-center">
        {t("commonquestions.title")}
      </h2>

      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <sdx-accordion keep-open="false">
            <sdx-accordion-item open>
              <sdx-accordion-item-header>
                <span
                  id="accordion_3"
                  className="h5 margin-0"
                  role="heading"
                  aria-level="2"
                >
                  {t("commonquestions.question1.question")}
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  {t("commonquestions.question1.answer")}
                </p>
              </sdx-accordion-item-body>
            </sdx-accordion-item>
            <sdx-accordion-item>
              <sdx-accordion-item-header>
                <span
                  id="accordion_4"
                  className="h5 margin-0"
                  role="heading"
                  aria-level="2"
                >
                  {t("commonquestions.question2.question")}
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_4"
                  className="text-recommended-max-width"
                  role="region"
                >
                  {t("commonquestions.question2.answer")}
                </p>
              </sdx-accordion-item-body>
            </sdx-accordion-item>
            <sdx-accordion-item>
              <sdx-accordion-item-header>
                <span
                  id="accordion_5"
                  className="h5 margin-0"
                  role="heading"
                  aria-level="2"
                >
                  {t("commonquestions.question3.question")}
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_5"
                  className="text-recommended-max-width"
                  role="region"
                >
                  {t("commonquestions.question3.answer")}
                </p>
              </sdx-accordion-item-body>
            </sdx-accordion-item>
            <sdx-accordion-item>
              <sdx-accordion-item-header>
                <span
                  id="accordion_3"
                  className="h5 margin-0"
                  role="heading"
                  aria-level="2"
                >
                  {t("commonquestions.question4.question")}
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  {t("commonquestions.question4.answer")}
                </p>
              </sdx-accordion-item-body>
            </sdx-accordion-item>
          </sdx-accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
