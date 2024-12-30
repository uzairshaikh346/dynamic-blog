import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8 sm:px-10 lg:px-12 mt-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
          <p className="mt-6 text-xl text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form className="grid grid-cols-1 gap-8">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact