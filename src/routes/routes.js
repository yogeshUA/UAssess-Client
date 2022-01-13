import React from 'react';

import {BrowserRouter , Routes, Route} from 'react-router-dom';
import LandingPage from '../views/landinPage/landingPage';
import Header from '../components/header/Header';
import ConfirmationPage from '../views/ConfirmationPage/ConfirmationPage';


const Routers = () => {
    return (
        
      <BrowserRouter>
      <Header/>
   
    <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path="/confirmation" element={<ConfirmationPage/>} />
    </Routes>
       
       </BrowserRouter>
    )
}

export default Routers;
