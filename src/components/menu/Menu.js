import React, { useEffect, useState } from 'react';
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
    <div class='menu-wrap'>
      <input
        type='checkbox'
        className='toggler'
        checked={isChecked}
        onChange={handleChange}
      />
      <div className='hamburger'>
        <div></div>
      </div>
      <div class='menu'>
        <div>
          <div className={ItemIsClicked ? 'menu-items hide' : 'menu-items'}>
            <ul>
              {menu.map((el) => (
                <li key={el.item}>
                  <a href={'#' + el} onClick={() => displayLoadingPage()}>
                    {el}
                  </a>
                </li>
              ))}
              <div className='social-icons'>
                <a href='/'>
                  <i class='fa-brands fa-linkedin'></i>
                </a>
                <a href='/data'>
                  <i class='fa-brands fa-github'></i>
                </a>
                <a href='/'>
                  <i class='fa-brands fa-instagram'></i>
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
