import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Foot from './pages/Foot';
import Standard from './pages/room/standard';
import Deluxed from './pages/room/deluxe';
import Suite from './pages/room/suite';
import Standard1 from './pages/room/room/standard1';
  // หากต้องการให้ Navroom แสดงในหน้า Standard

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Use Routes to handle routing */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/my-app" element={<Home />} />

          {/* Route for the standard room page */}
          <Route path="/standard" element={<Standard />} />
          <Route path="/deluxe" element={<Deluxed />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/standard1" element={<Standard1 />} />
          {/* Optionally, you can render Navroom inside Standard or as a child route */}
        </Routes>

        <Foot /> {/* This will render the Footer on all pages */}
      </div>
    </Router>
  );
}

export default App;
