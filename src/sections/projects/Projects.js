import React from 'react';

import image1 from '../../assets/keni.png';
import image2 from '../../assets/contextus.png';
import image3 from '../../assets/kenodev.png';

const projects = [
  {
    src: image1,
    name: 'Keni',
    description: 'Presentational accountant website',
    buttonText: 'Visit Page',
    url: 'https://keni.ba',
  },
  {
    src: image2,
    name: 'Contextus',
    description: 'Custom Translator App for students',
    buttonText: 'Visit Page',
    url: 'https://contextus.at',
  },
  {
    src: image3,
    name: 'KenoDev',
    description: 'Check source code for this project',
    buttonText: 'GitHub',
    url: 'https://github.com/kenoaljiji/keno-dev',
  },
];

const Projects = () => {
  return (
    <section className='projects '>
      <div className='grid bg-secondary'>
        <div className='side'></div>
        <div className='container flex-column-center'>
          <h2>
            My<span> Projects</span>
          </h2>
          <div className='projects-content'>
            <p className='projects-description'>
              I want to share with you some real world web applications that I
              made for my clients as a freelancer , and my code for this
              portfolio . I always want to join some great team and companies
            </p>

            <div className='projects-cards'>
              {projects.map((item) => (
                <div className='flip-card'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                      <img src={item.src} alt={item.name} />
                    </div>
                    <div className='flip-card-back'>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className='btn-container'>
                        <a href={item.url} className='cta'>
                          <span>{item.buttonText}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
