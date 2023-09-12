import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";



function KekRouter() {
  return ( 
      <Routes>
        <Route path="/about" element={<About/> } />
        <Route path="/afisha" element={<Afisha/> } />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes> 
  );
}

export default KekRouter;
