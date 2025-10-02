import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My Application</h1>
            <nav className="mt-2">
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className='hover:underline'>Services</a></li>
            </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
