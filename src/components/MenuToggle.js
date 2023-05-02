import * as React from 'react';
import { motion } from 'framer-motion';
import Humburger from '../layout/Humburger';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);
<svg
  width='50'
  height='2'
  viewBox='0 0 50 2'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <line y1='1' x2='50' y2='1' stroke='#FFF9F9' stroke-width='2' />
</svg>;

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2' },
          open: { d: 'M 2 16.5 L 17 2' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
