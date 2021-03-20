import React from 'react';
import Navbar from '../components/Navbar';
import{Link} from 'react-router-dom';
import '../App.css';

function Home() {
  return (
  
    <div className="Home">
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-slogan">The Best of <br></br>Morocco 4 you!</h1>
          <p className="hero-slogan-subtitle">Are you ready for an unforgettable adventure?</p>
          <Link to='/tours'><button className="contact-btn hero-slogan-contact-btn">Book Tour</button></Link>
          <button className="contact-btn hero-slogan-book-btn">Contact</button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;