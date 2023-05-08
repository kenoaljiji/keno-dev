import React from 'react';
import { projects } from './data';
import Card from '../../components/Card';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='container flex-column-center'>
        <h2>
          My<span> Projects</span>
        </h2>
        <div className='projects-content'>
          <p className='projects-description'>
            I want to share with you some real world web applications that I
            made for my clients as a freelancer , and my code for this portfolio
            . I always want to join some great team and companies
          </p>

          <div className='projects-cards'>
            {projects.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
