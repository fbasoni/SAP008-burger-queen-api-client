import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Home from './pages/Home/Home.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import InitialPage from './pages/InitialPage/InitialPage.js';


function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/initialPage" element={<InitialPage />}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;