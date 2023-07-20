// App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Education from './Pages/Education';



const App = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/Pages/Portfolio" element={<Portfolio />} />
        <Route path="/Pages/About" element={<About />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="/Pages/Resume" element={<Resume />} />
        <Route path="/Pages/Skills" element={<Skills />} />
        <Route path="/Pages/Education" element={<Education />} />
      </Routes>
    </Router>
  );


}

export default App
