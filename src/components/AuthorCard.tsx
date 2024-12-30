"use client"

import React from 'react'
import Image from 'next/image'
import me from "../../public/images/myImage.jpeg"

function AuthorCard() {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4 hover:shadow-xl transition duration-300 w-full max-w-screen-xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-shrink-0">
          <Image 
            src={me} 
            alt='Muhammad Uzair profile photo'
            className="h-full w-full object-cover md:h-full md:w-48 rounded-t-lg md:rounded-l-lg md:rounded-t-none p-1"
            priority
          />
        </div>
        <div className="p-8 w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition duration-300">
            Muhammad Uzair
          </h1>
          <h2 className="text-lg text-indigo-600 font-semibold mb-4">
            Frontend Web Developer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Muhammad Uzair is an IT student currently pursuing a course in Cloud Applied Generative AI Engineering. He has a passion for web development and has worked with HTML, CSS, JavaScript/TypeScript, React, and Next.js. His projects include GIAIC Clone Web, Alikhlas, Weather App, Resume Builder, and Countdown Timer. He is also learning data science and Python while improving his English and programming skills. His goal is to enhance his abilities by working on innovative and challenging projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
