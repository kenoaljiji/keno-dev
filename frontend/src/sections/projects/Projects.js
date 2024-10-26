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
            I want to share with you some real world projects that I made , and
            my code for this portfolio .I'm committed to creating functional and
            delightful user experiences, and I hope you enjoy exploring my
            projects!
          </p>
          <div className='projects-cards'>
            {projects.map((item) => (
              <Card item={item} key={item.name} />
            ))}
          </div>
          <p className='projects-description' style={{ minWidth: '300px' }}>
            I have numerous projects on my{' '}
            <a href='https://github.com/kenoaljiji'>GitHub</a> account that I've
            developed in my free time. Feel free to check them out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
