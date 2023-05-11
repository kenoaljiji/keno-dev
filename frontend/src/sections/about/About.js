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
                I'm always eager to explore new technologies and stay up-to-date
                with the latest trends in the industry. I approach each project
                with a sense of playfulness and joy, and I think that shows in
                the final product.
              </p>
              <p>
                My favorite technology stack is MERN, and I'm particularly
                passionate about JavaScript.
              </p>
              <p>
                I'm also an artist at heart, and I love to express myself
                through music. For me, music and coding have a lot in common:
                both require creativity, discipline, and a willingness to take
                risks.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
