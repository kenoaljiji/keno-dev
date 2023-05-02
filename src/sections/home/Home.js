import React from 'react';
import imageKenan from '../../assets/kenan.png';

const Home = () => {
  return (
    <section>
      <div className='grid bg-primary bg-overlay'>
        <div className='side'></div>

        <div className='home container'>
          <div className='home-heading'>
            <h1>
              Hi, I’m <span>Kenan Aljiji</span> <br />
              Web Developer
            </h1>
            <div className='home-text'>
              <p>{'<p>Fullstack Developer / Designer<p>'}</p>
              <p>
                <span className='home-text--purple'>return </span>
                <span className='home-text--yellow'>alert</span>("I’m looking
                for a new role");
              </p>
            </div>
            <div className='btn-container'>
              <a href='#'>Contact Me</a>
            </div>
          </div>
          <div className='home-picture'>
            <img src={imageKenan} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
