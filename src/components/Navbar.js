import React, {useState} from 'react'
import{Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [showLinks, setShowLinks] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setShowLinks(!showLinks);


  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            Morocco4u 
          </Link>
          <i className='fas fa-bars' onClick={() => setShowLinks(!showLinks)}></i>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} id={showLinks ? 'hidden': ''}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/tours' className='nav-links' onClick={closeMobileMenu}>
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/accomodations' className='nav-links' onClick={closeMobileMenu}>
                Accommodations
              </Link>
            </li>
            <button className="contact-btn" buttonStyle='btn--primary'>Contact</button>
            <div className="menu-icon hamburger-icon" onClick={handleClick}>
            <i className={'fas fa-times'} onClick={() => setShowLinks(!showLinks)}></i>
          </div>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
