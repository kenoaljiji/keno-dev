import React from 'react';
import iconsImg from '../../assets/icons3.png';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <h2>
          <span>What</span> I Do
        </h2>
        <p className='skills-description'>
          I specialize in building beautiful Web Designs, along with Web and
          Mobile applications. I’m always eager to expand my expertise and stay
          updated with the latest trends.
        </p>
        <div style={{ textAlign: 'center' }}>
          <h3>Skills</h3>
          <div className='skills-icons'>
            <div>
              <img src={iconsImg} alt='Skills' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
