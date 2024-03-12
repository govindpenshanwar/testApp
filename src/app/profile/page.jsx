"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Profile() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/Users/logout');
      router.push('/login');
    } catch (error) {
      console.error("Err at profile page => " , error.message);
    }
  }

  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <h1>This is Profile Page</h1>
      <button
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Profile
