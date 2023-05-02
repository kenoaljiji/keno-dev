import React from 'react';

const Contact = () => {
  return (
    <div className='grid'>
      <div className='side'></div>
      <div className='container'>
        <div className='contact '>
          <h2>
            Contact <span>Me</span>
          </h2>
          <form action='' className='form'>
            <div className='form-control'>
              <input type='text' placeholder='full name' />
            </div>
            <div className='form-control'>
              <input type='text' placeholder='email' />
            </div>
            <div className='form-control'>
              <input type='text' placeholder='Subject' />
            </div>
            <div className='form-control'>
              <textarea type='text' placeholder='Message' />
            </div>
            <div className='form-control'>
              <input className='button' type='submit' value='Send' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
