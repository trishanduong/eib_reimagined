import Head from 'next/head';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="">
      <Head>
        <title>Project Shipping Page</title>
      </Head>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-gray-600 md:text-5xl font-bold mt-4">
          Your Trusted Partner in Financial Growth
          </h1>
          <p className="text-gray-500 mt-4">
          Empowering Your Future with Secure Banking Solutions
          </p>
          <div className="mt-8">
            <a href="#" className="px-6 py-3 bg-red-600 text-white rounded-lg mr-4">Get started</a>
            <a href="#" className="px-6 py-3 text-red-600 border border-red-600 rounded-lg">Learn more</a>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image 
            className="relative"
            src="/mobile_mockup.png"
            alt="Eastern International Bank Logo"
            width={280}
            height={96}
          />
        </div>
      </div>
    </div>
  );
}

// text-white p-4 rounded-lg w-80 h-96