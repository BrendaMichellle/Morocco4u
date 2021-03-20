import React from 'react'
import Aimg from '../components/images/accommodationsmobile.jpeg';
import Aimg2 from '../components/images/accommodations.jpeg';
import Navbar2 from '../components/Navbar2';
import '../App.css';

function Accomodations() {
  return(
    <div className="Accomodations">
    <h3 className="tours-section-title">Accommodations</h3>
    <div className="underline"></div>
      <div className="Accommodations-container">
        <img className="acc-img" src={Aimg} alt=""/>
        <img className="acc-img2" src={Aimg2} alt=""/>
        <div className="acc-section">
          <div className="accomodation">
            <h3 className="acc-title">01</h3>
            <p className="acc-desc"><span className="acc-name">Riads</span> are traditional Moroccan hotels. If you want the best experience it is recommended that you stay in a Riad.</p>
          </div>
          <div className="accomodation">
            <h3 className="acc-title">02</h3>
            <p className="acc-desc"><span className="acc-name">Hotels</span> are located everywhere and they all have different styles and benefits.</p>
          </div>
          <div className="accomodation">
            <h3 className="acc-title">03</h3>
            <p className="acc-desc"><span className="acc-name">Luxury Stay</span> are available for those interested in the best stay possible. There are lusury Riads and hotels available.</p>
          </div>
      </div>
    </div>
    <Navbar2 />
    </div>

  );
}

export default Accomodations;