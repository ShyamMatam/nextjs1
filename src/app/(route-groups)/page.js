import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Route groups in Next.js are a way to logically organize routes within your application's file structure without affecting the URL paths. They are created by wrapping a folder's name in parentheses, like (marketing) or (shop), and this folder and its contents are not included in the generated route URLs. </h1>
      <h1> Its best use for auth</h1>
    </div>
  )
}

export default page
// This allows you to keep your codebase clean and maintainable while still having a clear structure for your routes. Route groups can be nested, and they can also contain subfolders and files, allowing for complex routing structures without cluttering the URL paths.