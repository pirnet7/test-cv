import "./App.css";
import { Suspense } from 'react';

import Navbar from "./components/NavbarComponent/NavbarComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
import Projects from "./components/ProjectsComponent/ProjectsComponent";
import Skills from "./components/SkillsComponent/SkillsComponent";
import CommonQuestions from "./components/CommonQuestionsComponent/CommonQuestionsComponent";
import Divider from "./components/DividerComponent/DividerComponent";
import Aboutme from "./components/AboutmeComponent/AboutmeComponent";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Divider />
      <Aboutme />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <CommonQuestions />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
