import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Banner from "./components/Banner"
import AboutMe from "./components/About-Me"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
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
    <Banner />
      <Routes>
        <Route path="/" element={<AboutMe />} />
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
    <Footer />
    </>
  );
}

export default App;
