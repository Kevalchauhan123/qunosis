import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Index from './templates/Index'
import About from './templates/About';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
