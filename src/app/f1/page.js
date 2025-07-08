import React from 'react'
import Link from 'next/link';
const  F1 = () => {
  return (
    <div>
      <h1>F1 - it is intercepting routes</h1>
        <p>This page is part of the parallel routes example.</p>
        <h1>Intercepting routes in Next.js are needed to provide a more user-friendly experience, particularly when displaying modals or previews without changing the overall page context. </h1>
        <Link href="/f1/f2">Go to F2</Link>
        <Link href="/f3">Go to F3</Link>
    </div>
  )
}

export default F1;
