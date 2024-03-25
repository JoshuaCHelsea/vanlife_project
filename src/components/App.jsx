import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>

      <header>
        
          <Navbar/>
        
      </header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
