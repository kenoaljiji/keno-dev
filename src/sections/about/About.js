import React from 'react';
import image from '../../assets/kenan2.png';

const About = () => {
  return (
    <section className='about bg-secondary'>
      <div className='container'>
        <h2>
          Get Now<span> Me</span> Better
        </h2>

        <div className='about-content'>
          <div className='mt-5'>
            <h3>
              <span>About</span> Me
            </h3>
            <div className='about-description'>
              <p>
                I’m a Fullstack Developer located in Bosnia. I have a serious
                passion for UI effects, animations and creating intuitive,
                dynamic user experiences.
              </p>
              <p>
                My design passion is not standard design I usually design when I
                want to visual express myself
              </p>
              <p>
                I always gain new knowledge . Always stay in new technologies.
              </p>
            </div>
            <h3>
              <span>Want</span> To Hire Me
            </h3>
            <div className='btn-container mb-2'>
              <a href='/' className='cta'>
                <span>Contact Me</span>
              </a>
            </div>
          </div>
          <div className='about-picture'>
            <div>
              <img src={image} alt='Kenan 2' />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
