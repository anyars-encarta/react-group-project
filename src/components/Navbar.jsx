import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/planet-grey.png';

const Navbar = () => (
  <header>
    <div className="logo-container">
      <img className="logo-img" alt="logo" src={logo} />
      <p>Space Travelers&apos; Hub</p>
    </div>
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item"><NavLink to="/">Rockets</NavLink></li>
        <li className="nav-item"><NavLink to="/missions">Missions</NavLink></li>
        <li className="nav-item"><NavLink to="/my-profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
