import React from 'react';

export default function Button({ children }) {
  return (
    <button className="cursor-pointer bg-pink-500 shadow-md hover:bg-violet-500 text-white text-base font-bold my-4 py-2 px-4 rounded">
      {children}
    </button>
  );
}
