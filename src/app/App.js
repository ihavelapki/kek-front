import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../widgets/header";
import '../shared/styles/app.css';
import KekRouter from '../shared/router';
import AuthProvider from '../shared/auth';

function App() {
  return ( 
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <KekRouter></KekRouter>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
