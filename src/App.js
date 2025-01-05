import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Foot from './pages/Foot';

import Standard from './pages/room/standard';
import Deluxed from './pages/room/deluxe';
import Suite from './pages/room/suite';

import Standard1 from './pages/room/room/standard1';
import Deluxe1 from './pages/room/room/deluxe1';
import Deluxe2 from './pages/room/room/deluxe2';
import Suite1 from './pages/room/room/suite1';
import Suite2 from './pages/room/room/suite2';
import Suite3 from './pages/room/room/suite3';

import Standardbuy1 from './pages/room/buy/standardbuy1';
import Deluxebuy1 from './pages/room/buy/deluxebuy1';
import Deluxebuy2 from './pages/room/buy/deluxebuy2';
import Suitebuy1 from './pages/room/buy/suitebuy1';
import Suitebuy2 from './pages/room/buy/suitebuy2';
import Suitebuy3 from './pages/room/buy/suitebuy3';

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
          <Route path="/deluxe1" element={<Deluxe1 />} />
          <Route path="/deluxe2" element={<Deluxe2 />} />
          <Route path="/suite1" element={<Suite1 />} />
          <Route path="/suite2" element={<Suite2 />} />
          <Route path="/suite3" element={<Suite3 />} />

          <Route path="/standardbuy1" element={<Standardbuy1 />} />
          <Route path="/deluxebuy1" element={<Deluxebuy1 />} />
          <Route path="/deluxebuy2" element={<Deluxebuy2 />} />
          <Route path="/suitebuy1" element={<Suitebuy1 />} />
          <Route path="/suitebuy2" element={<Suitebuy2 />} />
          <Route path="/suitebuy3" element={<Suitebuy3 />} />
          {/* Optionally, you can render Navroom inside Standard or as a child route */}
        </Routes>

        <Foot /> {/* This will render the Footer on all pages */}
      </div>
    </Router>
  );
}

export default App;
