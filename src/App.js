import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Landing from "./components/Landing"
import AboutMe from "./components/About-Me"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Ubiquitous from "./components/pages/Ubiquitous"
import Friendship from "./components/pages/Friendship"
import Blog from "./components/pages/Blog"
import Weather from "./components/pages/Weather"
import Quiz from "./components/pages/Quiz"

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
        <Route path="/ubiquitous" element={<Ubiquitous />} />
        <Route path="/friendship" element={<Friendship />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
