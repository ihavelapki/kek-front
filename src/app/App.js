import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "../pages/About";
import Afisha from "../pages/Afisha";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/> } />
        <Route path="/afisha" element={<Afisha/> } />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
