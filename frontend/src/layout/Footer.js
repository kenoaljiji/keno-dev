import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container flex-between wrap'>
        <div className='footer-logo'>
          <h3>
            Keno<span>Dev</span>
          </h3>
          <p>Let’s craft things together </p>
        </div>

        <div className='footer-links'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-adress'>
          <p>Stovrela 100,</p>
          <p>77220</p>
          <p>Cazin</p>
          <p>Bosnia and Herzegovina</p>
          <p style={{ marginTop: '2rem' }}>kenan@kenodev.net</p>
        </div>
        <div className='footer-socials'>
          <h4>Let's Chat</h4>
          <div className='footer-socials--icons'>
            <a
              href='https://www.linkedin.com/in/kenan-aljiji-04750bbb'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a
              href='https://github.com/kenoaljiji'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a
              href='https://www.instagram.com/k3no_a'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>
          Designed and developed with <i className='fa-solid fa-heart'></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
