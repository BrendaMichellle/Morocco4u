import React from 'react'
import Tour1 from '../components/images/tour1.jpeg';
import Tour2 from '../components/images/tour2.jpeg';
import Tour3 from '../components/images/tour3.jpeg';
import Tour4 from '../components/images/tour4.jpeg';
import Tour5 from '../components/images/tour5.jpeg';
import Navbar2 from '../components/Navbar2';
import{Link} from 'react-router-dom';
import '../App.css';

function Tours() {
  return(
  <div className="Tours">
    <h3 className="tours-section-title">Popular Tours</h3>
    <div className="underline"></div>
    <p className='tours-section-subtitle'>Customized Moroccan tours just for you. Choose the cities and sites <br></br> you want to visit and leave the planning to us. </p>
      <div className="tours-container" id="tours">
        <div className="tour">
          <img className="tour-img" src={Tour1} alt=""/>
          <div className="tour-stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
          <h3 className="tour-title">Tour from Marrakech</h3>
          <p className="tour-desc">Marrakech - Tangier</p>
          <p className="tour-days">9 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour2} alt=""/>
          <div className="tour-stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
          <h3 className="tour-title">Northern Tour</h3>
          <p className="tour-desc">Fes- Assilah - Blue City</p>
          <p className="tour-days">7 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour3} alt=""/>
          <div className="tour-stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
          <h3 className="tour-title">Southern Desert Tour</h3>
          <p className="tour-desc">Marrakech - Sahara Desert</p>
          <p className="tour-days">6 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour4} alt=""/>
          <div className="tour-stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
          <h3 className="tour-title">Coast Tour</h3>
          <p className="tour-desc">Tangier - Essaouira</p>
          <p className="tour-days">8 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour5} alt=""/>
          <div className="tour-stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
          <h3 className="tour-title">Food Tour</h3>
          <p className="tour-desc">Marrakech - Fes</p>
          <p className="tour-days">9 days</p>
        </div>
      </div>
      <Link to='/contact'><button className=" contact-btn" id="tours-section-btn">Book Now</button></Link>
      <Navbar2 />
    </div>
  );
}

export default Tours;


