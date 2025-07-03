'use client'

import React from 'react'

const ErrorBoundary = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Error Boundary</h1>
      <p className="text-red-500">An error has occurred. Please try again later.</p>
    </div>
  )
}

export default ErrorBoundary
