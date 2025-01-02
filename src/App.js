import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Foot from './pages/Foot';
import Room from './pages/all-room'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Use Routes to handle routing */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/my-app" element={<Home />} /> {/* This renders Home on "/" */}
          
          {/* Route for the all-room page */}
          <Route path="/all-room" element={<Room />} />
        </Routes>

        <Foot /> {/* This will render the Footer on all pages */}
      </div>
    </Router>
  );
}

export default App;
