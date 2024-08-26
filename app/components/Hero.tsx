// Create a file `pages/index.js` or use any other component file.

import Head from 'next/head';

export default function Hero() {
  return (
    <div className="">
      <Head>
        <title>Project Shipping Page</title>
      </Head>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Your Trusted Partner in Financial Growth
          </h1>
          <p className="text-gray-500 mt-4">
          Empowering Your Future with Secure Banking Solutions
          </p>
          <div className="mt-8">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg mr-4">Get started</a>
            <a href="#" className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg">Learn more</a>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="bg-black text-white p-4 rounded-lg w-80 h-96">
            {/* Replace with an actual image or relevant content */}
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-2">
              {/* Simulating list of projects */}
              <div className="bg-gray-700 p-2 rounded-md">
                <span className="text-green-400">Planetaria</span> / ios-app
              </div>
              <div className="bg-gray-700 p-2 rounded-md">
                <span className="text-green-400">Planetaria</span> / mobile-api
              </div>
              <div className="bg-gray-700 p-2 rounded-md">
                <span className="text-green-400">Tailwind Labs</span> / tailwindcss.com
              </div>
              <div className="bg-gray-700 p-2 rounded-md">
                <span className="text-red-400">Protocol</span> / api.protocol.chat
              </div>
              {/* More items can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
