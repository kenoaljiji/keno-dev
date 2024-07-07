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
                Hi there! I'm a Fullstack Web Developer with a passion for
                designing beautiful and functional web applications and sites
                with creative solutions.
              </p>
              <p>
                I approach each project with a sense of playfulness and joy and
                really like to get things done on time
              </p>
              <p>
                My favorite technology stack is MERN, and I'm particularly
                passionate about JavaScript , but I'm interested in learning new
                technologies.
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
