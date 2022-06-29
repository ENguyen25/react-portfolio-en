import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Landing from "./components/Landing"
import AboutMe from "./components/About-Me"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
