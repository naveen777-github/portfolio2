import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import EducationAndCertifications from "./pages/EducationAndCertifications";
import Experience from "./pages/Experience";
import ContactAndResume from "./pages/ContactAndResume";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<EducationAndCertifications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactAndResume />} />
      </Routes>
    </BrowserRouter>
  );
}
