import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Component/Pages/Home';
import Aim from './Component/Pages/Aim';
import Experience from './Component/Pages/Experience';
import Education from './Component/Pages/Education';
import Resume from './Component/Pages/Resume';
import Blog from './Component/Pages/Blog';
import Contact from './Component/Pages/Contact';
import AllBlogs from './Component/Pages/AllBlogs'; // <-- Import here

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Aim" element={<Aim />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/all-blogs" element={<AllBlogs />} /> {/* <-- Added route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
