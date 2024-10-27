import image1 from '../../assets/keni.png';
import image2 from '../../assets/contextus.png';
import image3 from '../../assets/kenodev.png';
import image4 from '../../assets/gesnatur.png';

import js from '../../assets/javascript.png';
import html from '../../assets/html.png';
import css from '../../assets/css3.png';

import mongodb from '../../assets/mongodb.png';
import react from '../../assets/react.png';
import node from '../../assets/node-js.png';
import figma from '../../assets/figma.png';

export const projects = [
  {
    src: image1,
    name: 'Keni',
    description: 'Presentational accountant website',
    buttonText: 'Visit Page',
    url: 'https://keni.ba',
    tech: [js, html, css, figma],
  },
  {
    src: image2,
    name: 'Contextus',
    description: 'MERN stack Custom Translator App',
    buttonText: 'Visit Page',
    url: 'https://contextus.at',
    tech: [mongodb, react, node],
  },
  {
    src: image3,
    name: 'KenoDev',
    description: 'Check source code for this project',
    buttonText: 'GitHub',
    url: 'https://github.com/kenoaljiji/keno-dev',
    tech: [react, node, figma],
  },
  {
    src: image4,
    name: 'Gesnatur',
    description: 'Web site for Supplements and Cosmetic Shop',
    buttonText: 'Visit Page',
    url: 'https://gesnatur.at',
    tech: [figma],
  },
];
