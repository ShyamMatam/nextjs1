import React from 'react'

const ParallelRoutes = () => {
  return (
    <div>
      <h1>Parallel Routes Example</h1>
        <p>This page demonstrates the use of parallel routes in Next.js.</p>
        <p>Parallel routes allow you to render multiple components at the same time, each with its own layout and functionality.</p>
        <p>In this example, you can explore different sections like Team and Analytics, which are rendered in parallel.</p>
      <h1>Slots , these are defined by @folderName</h1>
      <h1>each defined slots are automatically becomes a prop in the layout.js</h1>
      <h1>independent route handling, in each folder we can set loading and error</h1>
    </div>
  )
}

export default ParallelRoutes;
