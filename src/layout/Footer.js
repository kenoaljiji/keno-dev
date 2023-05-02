import React from 'react';
import image from '../assets/kenodev.png';

const Footer = () => {
  return (
    <section>
      <div className='footer'>
        <div className='footer-logo'>
          <h3>
            Keno<span>Dev</span>
          </h3>
          <p>Let’s craft things together </p>
        </div>

        <div className='footer-links'>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Projects</a>
            </li>
            <li>
              <a href=''>Skills</a>
            </li>
            <li>
              <a href=''>About</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-adress'>
          <p>Stovrela 100,</p>
          <p>77220</p>
          <p>Cazin</p>
          <p>Bosnia and Herzegovina</p>
        </div>
        <div className='footer-socials'>
          <h4>Let's Chat</h4>
          <div className='socials-icons'>
            <i class='fa-brands fa-linkedin'></i>
            <i class='fa-brands fa-github'></i>
            <i class='fa-brands fa-instagram'></i>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>
          Designed and developed with <i class='fa-solid fa-heart'></i>
        </p>
      </div>
    </section>
  );
};

export default Footer;
