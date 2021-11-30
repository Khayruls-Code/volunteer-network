import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'
import deleteIcon from '../../logos/trash-2 9.png'

const Admin = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    fetch('https://mysterious-ridge-48147.herokuapp.com/events')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleDelete = (id) => {
    fetch(`https://mysterious-ridge-48147.herokuapp.com/events/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          const remaining = users.filter(event => event._id !== id)
          setUsers(remaining)
        }
      })
  }

  return (
    <div className='userContainer'>
      <p className='absolute top-5 right-20 font-bold'><Link className='text-blue-600 text-lg' to='/'>Home</Link>/<span>Admin</span></p>
      <div className="header py-2">
        <img className='w-44' src={logo} alt="" />
      </div>
      <div className="flex gap-6 mt-8">
        <div className="userLeft bg-white rounded p-3">
          <p className='text-blue-500 font-semibold text-lg'>Volunteer Register List</p>
          <p>Add Volunteer</p>
        </div>
        <div className="userRight bg-white rounded">
          <table className=' w-full'>
            <thead>
              <tr>
                <td>User</td>
                <td>Email</td>
                <td>Date</td>
                <td>Volunteer List</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody className='px-5'>
              {
                users?.map(data => <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.date}</td>
                  <td>{data.selected}</td>
                  <td onClick={() => handleDelete(data._id)}><img className='bg-red-500 p-1 rounded cursor-pointer' src={deleteIcon} alt="" /></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;