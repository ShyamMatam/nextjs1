
'use client';
import { useRouter } from 'next/navigation';
import React, { use } from 'react'

const Navigation = () => {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/'); // Navigate to the home page
    }
  return (
    <div>
      <h1>order page</h1>
      <button onClick={handleNavigation} className='text-blue-500 hover:underline'>pace order</button>
    </div>
  )
}

export default Navigation
