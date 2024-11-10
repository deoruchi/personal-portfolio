import { Home } from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { ProjectPage } from "./pages/ProjectPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="personal-portfolio/" element={<Home />} />
        <Route path="personal-portfolio/project" element={<ProjectPage />} />
        <Route path="personal-portfolio/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
