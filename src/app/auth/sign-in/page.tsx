'use client'

import { useUserFunctions } from '@/hooks/useUserFunctions';
import { AuthState, login } from '@/store/authSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../store/store'
import { Provider } from 'react-redux';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const { userLogin } = useUserFunctions();
  const { mutateAsync: loginUser, isError } = userLogin()

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await loginUser({ email, password });
      dispatch(login({email, password}));
      
      setEmail('');
      setPassword('');
      
  }

  const isAuthenticated = useSelector((state : {auth: AuthState}) => state.auth.isAuthenticated);
      if(isAuthenticated) {
        router.push('/dashboard');
      } else {
       
      }

  useEffect(() => {
    router.prefetch('/dashboard')
  }, [])



  return (
 
      <form className='bg-slate-600 text-slate-100 rounded-md w-1/3' onSubmit={handleSubmit}>
      {isError && <div className='text-slate-100 mb-4 p-4'>Invalid credentials</div>}
      <div className="mb-4 p-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4 p-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className='p-4'>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>
    </form>

  )
}

export default SignIn;