import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from '../components/Rockets';
import MyProfile from '../components/My-profile';
import Missions from '../components/Missions';
import Navbar from '../components/Navbar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  </>
);

export default App;
