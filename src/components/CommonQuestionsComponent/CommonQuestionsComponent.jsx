import "./CommonQuestions.css";

const CommonQuestions = () => {
  return (
    <div className="container commonQuestions">
      <h2 className="margin-bottom-3 sc-navy text-center">Common Questions</h2>

      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <sdx-accordion>
            <sdx-accordion-item open>
              <sdx-accordion-item-header>
                <span
                  id="accordion_3"
                  className="h5 margin-0"
                  role="heading"
                  aria-level="2"
                >
                  How was your first day as an apprentice?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  My first day as an apprentice was exciting and somewhat
                  overwhelming, but I was also curious and ready to learn
                  everything that came my way.
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
                  What inspired you to choose this apprenticeship?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_4"
                  className="text-recommended-max-width"
                  role="region"
                >
                  The prospect of learning practical skills and making a direct
                  contribution to an area that has always interested me inspired
                  me to choose this apprenticeship.
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
                  How have you evolved during the apprenticeship?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_5"
                  className="text-recommended-max-width"
                  role="region"
                >
                  During my apprenticeship, I greatly improved my skills in
                  teamwork and problem-solving, which helped me become more
                  professionally confident.
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
                  What advice would you give to others starting a similar
                  apprenticeship?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  My advice to others starting a similar apprenticeship would be
                  to be open to new experiences and actively seek opportunities
                  for personal and professional growth.
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
