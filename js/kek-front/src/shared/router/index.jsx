import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";
import FilmPage from '../../pages/FlimPage';
import BarGrill from '../../pages/BarGrill';
import LoginPage from '../../pages/LoginPage';
import SigninPage from '../../pages/SigninPage';
import { useAuth } from '../../shared/auth';

function KekRouter() {

  const PrivateRoute = ({element}) => {
    const {isAuthenticated} = useAuth();
    
    console.log('private:', isAuthenticated)
    return isAuthenticated ? (
      element ) : (
        <Navigate to="/login" />
    )
  
  };

  return ( 
      <Routes>
        <Route path="/about" element={<About/> } />
        <Route exact path="/afisha" element={<PrivateRoute element={<Afisha/> } />} />
        <Route exact path="/afisha/:id" element={<PrivateRoute element={<FilmPage/> } />} />
        <Route path="/bargrill" element={<PrivateRoute element={<BarGrill/>} />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes> 
  );
}

export default KekRouter;
