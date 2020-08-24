import React from 'react';
import './index.scss';

// svg

import chevronRight from '../../assets/icon/chevron-right.svg';
import facebook from '../../assets/icon/facebook.svg';
import twitter from '../../assets/icon/twitter.svg';
import instagram from '../../assets/icon/instagram.svg';
import linkedin from '../../assets/icon/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className="hear-it-first">
        <h2>Hear It First</h2>
        <div className="input">
          <input type="email" placeholder="Sign Up For Email ..." required />
          <img src={chevronRight} alt="click" />
        </div>
      </div>
      <div className="footer-links">
        <div>
          <button href="#">Help Center</button>
          <button href="#">Contact Us</button>
          <button href="#">Account</button>
          <button href="#">Product Help</button>
        </div>
        <div>
          <button href="#">Compare</button>
          <button href="#">Bulk Orders</button>
          <button href="#">Protect Our Winters</button>
          <button href="#">Product Help</button>
        </div>
        <div>
          <button href="#">Athletes</button>
          <button href="#">Warranty</button>
          <button href="#">Careers</button>
        </div>
      </div>
      <div className="social-media">
        <h2>FOLLOW US</h2>
        <div className="social-media-icons">
          <a href="https://twitter.com/bayad_jo" target="_blank">
            <img src={twitter} alt="my twitter account" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100030355061041"
            target="_blank"
          >
            <img src={facebook} alt="my facebook account" />
          </a>
          <a href="https://www.instagram.com/jo_byd/" target="_blank">
            <img src={instagram} alt="my instagram account" />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-bayad-5584171b4/"
            target="_blank"
          >
            <img src={linkedin} alt="my linkedin account" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
