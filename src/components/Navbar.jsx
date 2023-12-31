import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/planet-color-2.png';

const Navbar = () => (
  <header>
    <div className="nav-container">
      <div className="logo-container">
        <img className="logo-img" alt="logo" src={logo} />
        <p>Space Travelers&apos; Hub</p>
      </div>
      <nav className="navbar">
        <ul className="nav-items">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active link' : 'pending link')}>Rockets</NavLink></li>
          <li><NavLink to="/missions" className="link">Missions</NavLink></li>
          <li>|</li>
          <li><NavLink to="/my-profile" className="link">My Profile</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
