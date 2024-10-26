import React from 'react';
import image from '../../assets/kenan2.png';

const About = () => {
  return (
    <section className='about bg-secondary' id='about'>
      <div className='container'>
        <h2>
          About<span> Me</span>
        </h2>

        <div className='about-content'>
          <div className='mt-5'>
            <h3>
              Get to know <span>Me</span>
            </h3>
            <div className='about-description'>
              <p>
                Hello! I’m a Fullstack Web Developer and Designer who loves
                creating functional and visually engaging web applications and
                websites tailored to clients' needs.
              </p>
              <p>
                I bring a flexible, results-driven approach to every project,
                with a commitment to meeting deadlines and delivering quality
                work.
              </p>
              <p>
                <p>
                  My main focus is on solving clients' unique challenges by
                  designing and building beautiful, responsive websites and
                  applications that drive results. I’m dedicated to creating
                  solutions that not only look great but also perform
                  exceptionally well, helping clients reach their goals
                  effectively.
                </p>
              </p>
            </div>
          </div>
          <div className='about-picture'>
            <div>
              <img src={image} alt='Kenan 2' />
              <div className='socials'>
                <h4>Follow Me</h4>
                <div className='socials-icons'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
