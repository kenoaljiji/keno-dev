import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className=''>
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
    </section>
  );
};

export default Contact;
