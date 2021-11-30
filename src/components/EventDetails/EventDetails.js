import React from 'react';

const EventDetails = (props) => {
  const { event: { img, date, selected, _id }, handelDelete } = props
  return (
    <div className='flex p-4 bg-white rounded-lg gap-6 relative'>
      <div className="image h-40">
        <img className='h-full' src={img} alt="" />
      </div>
      <div className="details">
        <h1 className='text-2xl font-semibold'>{selected}</h1>
        <p className='text-md text-blue-500 mt-3'>{date}</p>
      </div>
      <button onClick={() => handelDelete(_id)} className='bottom-5 right-3 absolute py-2 px-4 hover:bg-gray-500 transition-bg duration-500 rounded bg-gray-300 text-white'>Cencel</button>
    </div>
  );
};

export default EventDetails;