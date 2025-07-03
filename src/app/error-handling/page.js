import React from 'react'

const ErrorHandling = async() => {

    // Simulate an error
    await new Promise((_, reject) => setTimeout(() => { reject(new Error('intentional error')); }, 2000)); // Simulate a 2-second delay before throwing an error
  return (
    <div>
      <h1>intentionally generated error</h1>
    </div>
  )
}

export default ErrorHandling

// 'use server'
 
// For these errors, avoid using try/catch blocks and throw errors. Instead, model expected errors as return values.

// export async function createPost(prevState, formData) {
//   const title = formData.get('title')
//   const content = formData.get('content')
 
//   const res = await fetch('https://api.vercel.app/posts', {
//     method: 'POST',
//     body: { title, content },
//   })
//   const json = await res.json()
 
//   if (!res.ok) {
//     return { message: 'Failed to create post' }
//   }
// }