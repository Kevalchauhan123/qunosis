import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Index from './templates/Index'
import About from './templates/About';
import Team from './templates/Team';
import Service from './templates/Service';

function App() {

  return (
    <>
      <HashRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
