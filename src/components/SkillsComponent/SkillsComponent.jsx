import "bootstrap/dist/css/bootstrap.min.css";
import "./SkillsComponent.css";

const Skills = () => {
  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy text-center">Skills</h2>
      <sdx-tabs theme="centered">
        <sdx-tabs-item label="Frontend" icon-name="icon-computer">
          <div className="d-flex justify-content-center row">
            <div
              id="toolsTable"
              className="table table--responsive table--border col-xs-12 col-md-9 col-lg-10 text-center"
            >
              <div className="table__wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Assessment</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="skillName">HTML/CSS:</td>
                      <td>Expert</td>
                      <td>3 Years</td>
                    </tr>
                    <tr>
                      <td className="skillName">Vue.js:</td>
                      <td>Beginner</td>
                      <td>5 Months</td>
                    </tr>
                    <tr>
                      <td className="skillName">React.js:</td>
                      <td>Advanced</td>
                      <td>6 Months</td>
                    </tr>
                    <tr>
                      <td className="skillName">Java:</td>
                      <td>Beginner</td>
                      <td>6 Month</td>
                    </tr>
                    <tr>
                      <td className="skillName">Bootstrap:</td>
                      <td>Expert</td>
                      <td>2 Years</td>
                    </tr>

                    <tr>
                      <td className="skillName">SDX:</td>
                      <td>Advanced</td>
                      <td>1.5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </sdx-tabs-item>
        <sdx-tabs-item label="Backend" icon-name="icon-server">
          <div className="d-flex justify-content-center">
            <div
              id="toolsTable"
              className="table table--responsive table--border col-xs-12 col-md-9 col-lg-10 text-center"
            >
              <div className="table__wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Assessment</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="skillName">Express:</td>
                      <td>Beginner</td>
                      <td>2 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </sdx-tabs-item>

        <sdx-tabs-item label="Other" icon-name="icon-setting">
          <div className="d-flex justify-content-center">
            <div
              id="toolsTable"
              className="table table--responsive table--border col-xs-12 col-md-9 col-lg-10 text-center"
            >
              <div className="table__wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tools</th>
                      <th>Assessment</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="skillName">Docker:</td>
                      <td>Advanced</td>
                      <td>2 Years</td>
                    </tr>
                    <tr>
                      <td className="skillName">MySQL:</td>
                      <td>Advanced</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td className="skillName">Batch:</td>
                      <td>Advanced</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td className="skillName">Ansible:</td>
                      <td>Beginner</td>
                      <td>6 Months</td>
                    </tr>
                    <tr>
                      <td className="skillName">Swagger:</td>
                      <td>Advanced</td>
                      <td>6 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </sdx-tabs-item>
      </sdx-tabs>
    </div>
  );
};

export default Skills;
