import "./App.css";

import Navbar from "./components/NavbarComponent/NavbarComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
import Projects from "./components/ProjectsComponent/ProjectsComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import Skills from "./components/SkillsComponent/SkillsComponent";
import CommonQuestions from "./components/CommonQuestionsComponent/CommonQuestionsComponent";
import Divider from "./components/DividerComponent/DividerComponent";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <CommonQuestions />
      <Footer />
    </div>
  );
}

export default App;
