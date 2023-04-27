import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Component/Pages/Home';
import Aim from './Component/Pages/Aim';
import Experience from './Component/Pages/Experience';
import Education from './Component/Pages/Education';
import Resume from './Component/Pages/Resume';
import Blog from './Component/Pages/Blog';
import Contact from './Component/Pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Aim' element={<Aim/>} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Education' element={<Education />}/>
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Blog' element={<Blog />}/>
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
