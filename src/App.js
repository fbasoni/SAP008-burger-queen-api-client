import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // padrão config
import Home from './pages/Home/Home.js';
import Register from './pages/Register/Register.js';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} >
         </Route>

         <Route path="/register" element={<Register />} >
         </Route>

      </Routes>

    </Router >
  );
}

export default App;