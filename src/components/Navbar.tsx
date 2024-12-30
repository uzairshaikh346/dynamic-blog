"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function Navbar() {
  const [currentDate, SetCurrentDate] = useState(``);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options:any = {
        weekday: "long",
        year: "numeric", 
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }
      SetCurrentDate(now.toLocaleDateString("en-US", options) + " " + now.toLocaleTimeString("en-US", {hour12:false}))
    }
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <nav className="w-full backdrop-blur-md bg-white/30 shadow-lg z-50 fixed top-0">
       {/* Date Time Display on mobile screen */}
       <div className="md:hidden sm:block text-sm font-medium flex justify-center mt-4">
            {currentDate}
          </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold sm:text-2xl">Uzair Blog</Link>
          </div>

          {/* Date Time Display */}
          <div className="hidden sm:block text-sm font-medium">
            {currentDate}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 justify-center">
              <Link href="/" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              
              <Link href="/contact" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-uzair-2526732a6/">
              <button className='bg-black text-white p-2 rounded-sm'>Linkedin</button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 hover:text-white"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
              Home
            </Link>
            <Link href="/about" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
              About
            </Link>
           
            <Link href="/contact" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
              Contact
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-uzair-2526732a6/" className='flex justify-center'>
              <button className='bg-black text-white p-2 rounded-sm'>Linkedin</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
