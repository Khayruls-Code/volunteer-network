import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../logos/logo.png'

const Header = () => {
  const { user, singOutuser } = useAuth()
  return (
    <div className='w-full'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className="logo">
            <img className='w-44' src={logo} alt="" />
          </div>
          <div className="navbar items-center flex justify-center">
            <ul className='items-center flex'>
              <li>
                <NavLink className='inline-block py-8 px-2 mx-2 text-gray-800 font-semibold' to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink className='inline-block py-8 px-2 mx-2 text-gray-800 font-semibold' to="/donation">Dination</NavLink>
              </li>
              <li>
                <NavLink className='inline-block py-8 px-2 mx-2 text-gray-800 font-semibold' to="/events">Events</NavLink>
              </li>
              <li>
                <NavLink className='inline-block py-8 px-2 mx-2 text-gray-800 font-semibold' to="/blogs">Blogs</NavLink>
              </li>
            </ul>
            <ul>
              <div className='flex items-center gap-4'>
                <Link className='inline-block py-2 px-5 rounded-full text-md bg-gray-600 text-white' to='/admin'>Admin</Link>
                {
                  user.email ?
                    <div className='flex items-center gap-2'>
                      <button onClick={singOutuser} className='inline-block py-2 px-5 rounded-full text-md bg-red-400 text-white outline-none border-none'>Sing Out</button>
                      <img className='userPhoto' src={user.photoURL} alt="" />
                    </div>
                    :
                    <Link className='inline-block py-2 px-5 rounded-full text-md bg-blue-500 text-white' to='/register'>Register</Link>
                }
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;