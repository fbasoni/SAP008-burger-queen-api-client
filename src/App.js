import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Home from './pages/Home/Home.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import Menu from './pages/Menus/Menu.js';
import Kitchen from './pages/Kitchen/Kitchen.js';


function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Kitchen" element={<Kitchen />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;