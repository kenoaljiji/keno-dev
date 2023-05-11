import React, { useState } from 'react';
import { menu } from './data';

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [ItemIsClicked, setItemIsClicked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  const displayLoadingPage = () => {
    setItemIsClicked(true);
    setTimeout(() => {
      setIsChecked(false);
      setItemIsClicked(false);
    }, 1200);
  };

  return (
    <div className='menu-wrap'>
      <input
        type='checkbox'
        className='toggler'
        checked={isChecked}
        onChange={handleChange}
      />
      <div className='hamburger'>
        <div></div>
      </div>
      <div className='menu'>
        <div>
          <div className={ItemIsClicked ? 'menu-items hide' : 'menu-items'}>
            <ul>
              {menu.map((el) => (
                <li key={el}>
                  <a href={'#' + el} onClick={() => displayLoadingPage()}>
                    {el}
                  </a>
                </li>
              ))}
              <div className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/kenan-aljiji-04750bbb'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin'></i>
                </a>
                <a
                  href='https://github.com/kenoaljiji'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-github'></i>
                </a>
                <a
                  href='https://www.instagram.com/k3no_a'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-instagram'></i>
                </a>
              </div>
            </ul>
          </div>
          <div className={ItemIsClicked ? 'show' : 'menu-loading'}>
            <h3>
              Kenan<span> Aljiji</span>
            </h3>
            <div className='loading-bar'>
              <div className='loading-bar-status'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
