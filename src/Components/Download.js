import React from 'react';
import { TfiMobile } from 'react-icons/tfi';
import { AiFillApple } from 'react-icons/ai';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Download = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-20 mt-8">
      <div className="container  mx-auto">
        <div className="flex justify-center md:pt-16 pt-12">
          <TfiMobile className="  h-20 w-16 text-pink-600" />
        </div>
        <div className="text-center space-y-10">
          <h1 className="md:text-5xl text-3xl text-white md:pt-20 pt-14">
            Download Anywhere
          </h1>
          <p className="text-gray-300 md:px-80 px-4">
            Available for all major mobile and desktop platforms. Rapidiously
            visualize optimal ROI rather than enterprise-wide methods of
            empowerment.
          </p>
        </div>
        <div className="flex md:space-x-8 space-x-4 justify-center pt-10 ">
            <button
              type="button"
              className="flex items-center px-6 py-2.5 bg-white text-purple-900 font-medium md:text-xl text-xs leading-tight  rounded shadow-lg hover:bg-gray-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              <AiFillApple className=" h-9 w-10 text-black" />
              APP STORE
            </button>
            <button
              type="button"
              className="flex items-center px-6 py-2.5  bg-white text-purple-900 font-medium md:text-xl text-xs leading-tight  rounded shadow-lg hover:bg-gray-200 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            >
              <IoLogoGooglePlaystore className="h-8 w-8" />
              GOOGLE PLAY
            </button>
        </div>
        <div className="text-center py-6 text-gray-200 md:text-xl text-xs"> <i  >*Works on iOS 10.0.5+, Android Kitkat and above.</i></div>
       
      </div>
    </section>
  );
};

export default Download;
