import React from 'react';
import iconsImg from '../../assets/icons.png';

const Skills = () => {
  return (
    <section className='skills'>
      <div className='container'>
        <h2>
          <span>What</span> I Do
        </h2>
        <p className='skills-description'>
          I’m in love with MERN stack applications and Web Design , but I always
          like to learn new technologies . Some of them is listed below
        </p>
        <div>
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
