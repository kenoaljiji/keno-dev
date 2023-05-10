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
            . I'm committed to creating functional and delightful user
            experiences, and I hope you enjoy exploring my projects!
          </p>
          <div className='projects-cards'>
            {projects.map((item) => (
              <Card item={item} key={item.name} />
            ))}
          </div>
          <p className='projects-description'>
            I have also lot of projects on my{' '}
            <a href='https://github.com/kenoaljiji'>GitHub</a> account ,20 of
            them are from PARAGON programming school, and they are on private
            repositories because of school law. If you want to check these out
            and you are the company, just email me so I can add you as a
            collaborator!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
