import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import PageInicial from './pages/PageInicial/PageInicial.js';


function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} >
         </Route>

         <Route path="/register" element={<Register />} >
         </Route>

         <Route path="/login" element={<Login />} >
         </Route>

         <Route path="/pageInicial" element={<PageInicial />} >
         </Route>

      </Routes>

    </Router >
  );
}

export default App;