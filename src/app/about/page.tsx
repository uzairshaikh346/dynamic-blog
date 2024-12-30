import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About News App</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to News App - your trusted source for the latest news and updates from around the world. We aggregate news from various reliable sources to keep you informed about what matters most.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Real-time news updates from trusted sources</li>
              <li>Multiple categories including Business, Technology, Sports, and more</li>
              <li>Clean and responsive user interface</li>
              <li>Quick access to breaking news</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Built With:</h3>
            <p className="text-gray-600 leading-relaxed">
              This application is built using modern web technologies including React.js, Bootstrap, and powered by NewsAPI. It demonstrates the implementation of component-based architecture and responsive design principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About