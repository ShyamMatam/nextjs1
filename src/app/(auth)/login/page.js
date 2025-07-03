import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>This is Login page</h1>
      <p className='text-2xl text-yellow'>This page is located in a folder with a special character in its name.</p>
      <p>Folders with special characters can be used to group related pages or components.</p>
      <p>However, it is recommended to avoid using special characters in folder names to prevent potential issues with routing or file handling.</p>
      <p>In this example, the folder name is wrapped in parentheses to indicate that it is a route group, which is a feature in Next.js that allows you to logically organize routes without affecting the URL paths.</p>
      <p>Route groups can be used to create a clean and maintainable structure for your application while still keeping the URLs user-friendly.</p>
    </div>
  )
}

export default Login
