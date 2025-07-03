import React from 'react'

const Loading1 = async() => {
  await new Promise((resolve) => setTimeout(() => { resolve('intentional delay'); }, 2000)); // Simulate a 2-second loading time
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">current page</h1>
    </div>
  )
}

export default Loading1
