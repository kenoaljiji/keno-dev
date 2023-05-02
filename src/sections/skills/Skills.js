import React from 'react';
/* import html from '../../assets/html.png';
import css3 from '../../assets/css3.png';
import sass from '../../assets/sass.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/node-js.png';
import mongodb from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import typescript from '../../assets/typescript.png';
import wordpress from '../../assets/wordpress.png';
import python from '../../assets/python.png';
import figma from '../../assets/figma.png'; */
import iconsImg from '../../assets/icons.png';

/* const icons = [
  {
    src: css3,
    text: 'CSS',
  },
  {
    src: html,
    text: 'HTML5',
  },
  {
    src: sass,
    text: 'SASS',
  },
  {
    src: js,
    text: 'JAVASCRIPT',
  },
  {
    src: react,
    text: 'REACT/NATIVE',
  },
  {
    src: node,
    text: 'NODE',
  },
  {
    src: mongodb,
    text: 'MONGODB',
  },
  {
    src: firebase,
    text: 'FIREBASE',
  },
  {
    src: typescript,
    text: 'TYPESCRIPT',
  },
  {
    src: wordpress,
    text: 'WORDPRESS',
  },
  {
    src: python,
    text: 'PYTHONE',
  },
  {
    src: figma,
    text: 'FIGMA',
  },
]; */

const Skills = () => {
  return (
    <section className='skills'>
      <div className='grid bg-secondary'>
        <div className='side'></div>
        <div className='container'>
          <h2>
            <span>What</span> I Do
          </h2>
          <p className='skills-description'>
            I’m in love with MERN stack applications and Web Design , but I
            always like to learn new technologies . Some of them is listed below
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
      </div>
    </section>
  );
};

export default Skills;
