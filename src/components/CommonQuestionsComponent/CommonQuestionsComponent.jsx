import "./CommonQuestions.css";

const CommonQuestions = () => {
  return (
    <div className="container commonQuestions">
      <h2 className="margin-bottom-3 sc-navy text-center">Common questions</h2>

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
                  Wie war dein erster Tag als Lehrling?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  Mein erster Tag als Lehrling war aufregend und etwas
                  überwältigend zugleich, aber ich war auch neugierig und
                  bereit, alles zu lernen, was auf mich zukam.
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
                  Was hat dich dazu inspiriert, dich für diese Ausbildung zu
                  entscheiden?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_4"
                  className="text-recommended-max-width"
                  role="region"
                >
                  Die Aussicht, praktische Fähigkeiten zu erlernen und einen
                  direkten Beitrag zu einem Bereich zu leisten, der mich schon
                  immer interessiert hat, hat mich dazu inspiriert, diese
                  Ausbildung zu wählen.
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
                  Wie hast du dich während der Ausbildung weiterentwickelt?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_5"
                  className="text-recommended-max-width"
                  role="region"
                >
                  Während meiner Ausbildung habe ich meine Fähigkeiten in der
                  Teamarbeit und Problemlösung stark verbessert, was mir
                  geholfen hat, beruflich selbstbewusster zu werden.
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
                  Welchen Rat würdest du anderen geben, die eine ähnliche
                  Ausbildung beginnen?
                </span>
              </sdx-accordion-item-header>
              <sdx-accordion-item-body>
                <p
                  aria-labelledby="accordion_3"
                  className="text-recommended-max-width"
                  role="region"
                >
                  Mein Rat an andere, die eine ähnliche Ausbildung beginnen,
                  wäre, offen für neue Erfahrungen zu sein und aktiv nach
                  Möglichkeiten zu suchen, sich persönlich und beruflich
                  weiterzuentwickeln.
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
