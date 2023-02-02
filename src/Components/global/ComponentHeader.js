import React from 'react';

const ComponentHeader = ({ heading, title }) => {
  return (
    <div className="text-center">
      <h3>{heading}</h3>
      <h1 className="md:text-4xl text-3xl text-purple-900 font-bold">{title} </h1>
    </div>
  );
};

export default ComponentHeader;
