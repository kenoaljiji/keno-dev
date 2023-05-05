import React, { useState, useEffect } from 'react';
import imageKenan from '../../assets/kenan.png';

const Home = () => {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState(
    `<p>Fullstack Developer / Designer</p>
    `
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);

  return (
    <section className='home'>
      <div className='home container'>
        <div className='home-heading'>
          <h1>
            Hi, I’m <span>Kenan Aljiji</span> <br />
            Web Developer
          </h1>
          <div className='home-text'>
            <p style={{ marginBottom: '10px', marginTop: '20px' }}>{text}</p>
            <p>
              return <span className='home-text--yellow'> alert</span>("I’m
              looking for a new role");
            </p>
            <div className='btn-container'>
              <a href='/' className='cta'>
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        <div className='home-picture'>
          <img src={imageKenan} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Home;
