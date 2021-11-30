import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = (props) => {
  const { categorie: { title, img, _id } } = props
  return (
    <Link to={`/categorie/${_id}`}>
      <div className='cursor-pointer text-center relative overflow-hidden rounded-b-lg'>
        <img src={img} alt="" />
        <h1 className='flex items-center justify-center absolute bottom-0 left-0 w-full bg-red-500 text-xl text-white h-20'>{title}</h1>
      </div></Link>
  );
};

export default Categorie;