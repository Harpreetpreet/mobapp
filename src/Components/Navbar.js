/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="container sticky top-0  mx-auto">
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:py-8 py-2">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setActive(!active)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!active && (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {active && (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="cursor-pointer flex md:w-auto w-full md:justify-start justify-center flex-shrink-0 items-center text-3xl text-white font-medium">
              <h1>
                MOB<strong>APP</strong>
              </h1>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center sm:items-stretch md:justify-end">
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium underline"
                    aria-current="page"
                  >
                    HOME
                  </a>

                  <a
                    href="#FEATURES"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FEATURES
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    GALLERY
                  </a>

                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    PRICING
                  </a>
                  <a
                    href="#"
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CONTACT
                  </a>
                  <a
                    href="#"
                    className="bg-transparent text-white px-3 py-1 rounded text-lg font-medium border-2 hover:bg-white hover:text-pink-400"
                    aria-current="page"
                  >
                    DOWNLOAD
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {active && (
          <div className="bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-500 md:hidden flex flex-col items-center px-3 py-10 shadow-xl z-50 absolute right-0 left-0 top-16">
            <a
              href="#"
              className=" text-white px-3 py-2 rounded-md text-sm font-medium underline"
              aria-current="page"
            >
              HOME
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              FEATURES
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              GALLERY
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              PRICING
            </a>
            <a
              href="#"
              className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="bg-transparent text-white px-3 py-1 rounded text-lg font-medium border-2 hover:bg-white hover:text-pink-400"
              aria-current="page"
            >
              DOWNLOAD
            </a>
          </div>
        )}
      </nav>

    </div>
  );
}
