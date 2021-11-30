import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Membership = () => {
  const { id } = useParams()
  const [categorie, setCategorie] = useState({})
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    fetch(`https://mysterious-ridge-48147.herokuapp.com/categorie/${id}`)
      .then(res => res.json())
      .then(data => setCategorie(data))
  }, [id])

  const onSubmit = data => {
    data.img = categorie.img
    fetch('https://mysterious-ridge-48147.herokuapp.com/events', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(event => {
        if (event.acknowledged === true) {
          alert('Successfully added this event')
          reset()
        }
      })
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <p className='absolute top-20 left-20 font-bold'><Link className='text-blue-600 text-lg' to='/'>Home</Link>/<span>Membership</span></p>
      <div className='w-2/5 bg-white p-8 rounded-lg'>
        <h1 className='text-3xl font-semibold'>Register as a Volunteer</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Full Name' className=' block w-full py-2 px-2 my-4 rounded outline-none' {...register("name", { required: true, maxLength: 20 })} />
          <input placeholder='Email or Username' className=' block w-full py-2 px-2 my-4 rounded outline-none' {...register("email", { required: true })} />
          <input className=' block w-full py-2 px-2 my-4 rounded outline-none' type='date' {...register("date", { required: true })} />
          <input placeholder='Deacription' className=' block w-full py-2 px-2 my-3 rounded outline-none' {...register("description", { required: true })} />
          <input value={categorie.title || ''} placeholder='Categorie' className=' block w-full py-2 px-2 my-4 rounded outline-none' {...register("selected", { required: true })} />
          <input className='bg-blue-500 text-white font-semibold cursor-pointer block w-full py-2 px-2 my-4 rounded outline-none' type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Membership;