import React from 'react'
import Link from 'next/link'

const LinkNavigation = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Link Navigation Example</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Home </Link>  
        <Link href="/about" replace>About</Link>     
        {/* This prop, when set to true, replaces the current entry in the browser's history stack with the new route. This means that clicking the "back" button will not return the user to the previous page, the history will not show in browser history...     */}
    </div>
  )
}

export default LinkNavigation
