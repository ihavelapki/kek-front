import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../widgets/header";
import '../shared/styles/app.css';
import KekRouter from '../shared/router';

function App() {
  return ( 
    
    <BrowserRouter>
      <Navbar></Navbar>
      <KekRouter></KekRouter>
    </BrowserRouter>
  );
}

export default App;
