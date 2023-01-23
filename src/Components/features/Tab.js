import React from 'react';

const Tab = ({ active, title, onClick }) => {
  return (
    <li className="nav-item flex-auto text-center" role="presentation">
      <a
        onClick={onClick}
        className={`cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-4 border-b-0 border-transparent px-6
      
         py-5 active ${active ? "bg-white border-pink-500":"bg-gray-100 border-transparent"}`}
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-homeFill"
        role="tab"
        aria-controls="tabs-homeFill"
        aria-selected="true"
      >
        {title}
      </a>
    </li>
  );
};

export default Tab;
