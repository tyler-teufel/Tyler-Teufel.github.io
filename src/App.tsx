// App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Header } from './components/header';
import { GlobalStyles } from './styles';
const App = () => {

  return (
    <>  

    <GlobalStyles />
    <Router>
    <Header />
    <Routes>
      {routes.map(route => (
        <Route 
          key={route.path}
          path={route.path}
          element={<route.component />} 
        />
      ))}
    </Routes>
    </Router>
    </>
    /*
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
    */
  );


}

export default App
