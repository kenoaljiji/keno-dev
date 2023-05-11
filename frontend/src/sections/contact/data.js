export const inputFields = [
  {
    type: 'text',
    placeholder: 'Full Name',
    name: 'fullName',
    field: 'input',
  },
  {
    type: 'email',
    placeholder: 'Email',
    name: 'email',
    field: 'input',
  },
  {
    type: 'text',
    placeholder: 'Subject',
    name: 'subject',
    field: 'input',
  },
];

export const validate = (values) => {
  let errors = {};

  if (!values.fullName || values.fullName.length < 3) {
    errors.fullName = 'Full Name must be at least 3 letters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.subject) {
    errors.subject = 'Subject is required';
  }

  if (!values.message || values.message.length < 6) {
    errors.message = 'Message must be at least 6 letters';
  }

  return errors;
};
