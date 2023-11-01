import React from 'react';
import iconsImg from '../../assets/icons2.png';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='container'>
        <h2>
          <span>What</span> I Do
        </h2>
        <p className='skills-description'>
          I have experience working on MERN stack ,Javascript and Web Design ,
          but I always like to learn new technologies
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
