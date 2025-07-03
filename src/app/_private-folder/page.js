import React from 'react'

const PrivateFolder = () => {
  return (
    <div>
        <h1>Private Folder Example</h1>
        <p>This page is located in a private folder.</p>
        <p>It is used to demonstrate how to create a private folder in a React application.</p>
        <p>Private folders can be used to store sensitive information or components that should not be publicly accessible.</p>
        <p className='text-2xl text-yellow'>This page can be accessed only by authorized users. And we can also keep this outside of the app folder</p>
    </div>
  )
}

export default PrivateFolder;
