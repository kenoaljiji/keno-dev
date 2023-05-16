import React, { useState } from 'react';
import { inputFields, validate } from './data';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { localhost } from '../../config';

const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form data
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // If there are no validation errors, send the form data to the server
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        // Send the form data to the server
        const response = await axios.post(`${localhost}/submit-form`, values);

        // Check the response status and update the state accordingly
        if (response.status === 200) {
          setLoading(false);
          setMessage({
            type: 'success',
            message: `Thank you, ${values.fullName}, for you message! We'll be in touch soon!`,
          });
          setValues({
            fullName: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          setMessage({
            type: 'error',
            message: 'Error sending email!',
          });
          throw new Error('Error sending email');
        }
      } catch (error) {
        setLoading(false);
        console.error(error);

        setMessage({
          type: 'error',
          message:
            'There was an error sending your message. Please try again later!',
        });
      }

      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
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
              <div>
                <input className='button' type='submit' value='Send' />
              </div>
            </div>
            <div className='form-message'>
              {loading ? (
                <Spinner />
              ) : (
                message && (
                  <p className={`form-message--${message?.type}`}>
                    {message.message}
                  </p>
                )
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
