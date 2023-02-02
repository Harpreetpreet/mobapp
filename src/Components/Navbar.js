/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="container mx-auto">
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

      {/* <nav classNameName="  border-gray-200 md:p-4 px-2 ">
        <div classNameName="container flex flex-wrap items-center justify-between mx-auto md:px-14 px-2 ">
          <a href="#" classNameName="flex items-center">
            <span classNameName="self-center text-3xl font-bold whitespace-nowrap text-white dark:text-white">
              MOB<strong>APP</strong>
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            classNameName="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="true"
          >
            <span classNameName="sr-only">Open main menu</span>
            <svg
              classNameName="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            classNameName="hidden w-full md:block  md:w-auto"
            id="navbar-dropdown"
          >
            <div classNameName="text-2xl">
            <ul classNameName="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700 text-white">
              <li>
                <a
                  href="#"
                  classNameName="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black md:dark:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#Feature"
                  classNameName="block py-2 pl-3 pr-4  rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent "
                  aria-current="page"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  classNameName="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  classNameName="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  classNameName="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  classNameName="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Download
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
