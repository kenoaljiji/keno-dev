import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <img src={item.src} alt={item.name} className='logo' />
          <ul className='flip-card-icons'>
            {item.tech.map((el, index) => (
              <li key={el}>
                <img src={el} alt='' className='icon' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flip-card-back'>
          {/* <img src={item.src} alt={item.name} /> */}
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
  );
};

export default Card;
