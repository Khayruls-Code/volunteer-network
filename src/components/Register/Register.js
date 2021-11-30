import React from 'react';
import logo from '../../logos/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const { singInUsingGoogle, setIsLoading, setUser } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const location_url = location.state?.from;
  console.log(location_url)

  const handleSingIn = () => {
    setIsLoading(true)
    singInUsingGoogle()
      .then(result => {
        setUser(result.user)
        history.push(location_url)
      })
      .catch(error => console.log(error.message))
      .finally(setIsLoading(false))
  }



  return (
    <div className='flex items-center justify-center flex-col pt-20'>
      <p className='absolute top-20 left-20 font-bold'><Link className='text-blue-600 text-lg' to='/'>Home</Link>/<span>Login</span></p>
      <div className="logo w-full">
        <img className='w-60 m-auto' src={logo} alt="" />
      </div>
      <div className="register mt-6 rounded-lg cursor-pointer w-1/3 bg-white text-center py-20 px-5">
        <h1 className='text-2xl font-bold'>Login Here</h1>
        <div onClick={handleSingIn} className="google w-full py-2 mt-6 px-2 rounded-full border-2 flex items-center justify-center gap-12">
          <div className="icon">
            <FcGoogle />
          </div>
          <h2 className='text-lg text-semibold'>Google</h2>
        </div>
        <p className='mt-4'>Dont have any account? <span className='text-blue-500'>Login</span></p>
      </div>
    </div>
  );
};

export default Register;