import React, { useState } from 'react';
import { inputFields, validate } from './data';

const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted', values);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    let error = null;

    if (value.trim() === '') {
      error = `${name} is required`;
    } else if (
      (name === 'fullName' && value.trim().length < 3) ||
      (name === 'email' && !/\S+@\S+\.\S+/.test(value)) ||
      (name === 'message' && value.trim().length < 6)
    ) {
      error = `Invalid ${name}`;
    }

    setErrors({ ...errors, [name]: error });
  };

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className=''>
          <h2>
            Contact <span>Me</span>
          </h2>
          <form action='' className='form' onSubmit={handleSubmit}>
            {inputFields.map((input, index) => (
              <div className='form-control' key={index}>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={values[input.name]}
                  onChange={handleChange}
                  style={
                    errors[input.name] && { borderBottom: '1px solid #924646' }
                  }
                />
              </div>
            ))}
            <div className='form-control'>
              <textarea
                type='text'
                placeholder='message'
                name='message'
                value={values.message}
                onChange={handleChange}
                style={errors.message && { borderBottom: '1px solid #924646' }}
              />
              {/*  {errors.message && <div className='error'>{errors.message}</div>} */}
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
