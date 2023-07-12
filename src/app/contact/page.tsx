'use client';

import { FormEvent, useState } from 'react';

const Contact = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormState);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Formulaire</h1>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
        <div className='flex flex-col mb-4'>
          <label htmlFor='firstName' className='mb-2 text-lg'>
            Prénom
          </label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Prénom'
            className='p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='lastName' className='mb-2 text-lg'>
            Nom
          </label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Nom'
            className='p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='email' className='mb-2 text-lg'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='phone' className='mb-2 text-lg'>
            Téléphone
          </label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Téléphone'
            className='p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
