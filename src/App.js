import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Component/Pages/Home';
const Aim = lazy(() => import('./Component/Pages/Aim'));
const Experience = lazy(() => import('./Component/Pages/Experience'));
const Education = lazy(() => import('./Component/Pages/Education'));
const Resume = lazy(() => import('./Component/Pages/Resume'));
const Blog = lazy(() => import('./Component/Pages/Blog'));
const Contact = lazy(() => import('./Component/Pages/Contact'));
const AllBlogs = lazy(() => import('./Component/Pages/AllBlogs'));

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
        <Suspense fallback={null}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Aim" element={<Aim />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
