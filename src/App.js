import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './routes/rockets';
import MyProfile from './routes/my-profile';
import Missions from './routes/missions';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
