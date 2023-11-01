import React from 'react';
import imageKenan from '../../assets/kenan.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home container'>
        <div className='home-heading'>
          <h1>
            Hi, I’m <span>Kenan Aljiji</span> <br />
            Web Developer
          </h1>
          <div className='home-text'>
            <div
              className='home-text--typing'
              style={{
                marginBottom: '10px',
                marginTop: '20px',
                fontWeight: '400',
              }}
            >
              {'<p>'}
              <Typewriter
                options={{
                  strings: [
                    'MERN stack Developer',
                    'JavaScript Developer',
                    'Web Designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {'</p>'}
            </div>
            <p>
              <span className='home-text--yellow'>alert</span>("I’m looking for
              new opportunity");
            </p>
            <div className='btn-container'>
              <a href='#contact' className='cta'>
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        <div className='home-picture'>
          <img src={imageKenan} alt='Kenan' />
        </div>
      </div>
    </section>
  );
};

export default Home;
