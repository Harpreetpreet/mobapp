import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Details = ({ isReverse, heading, title, details }) => {
  return (
    <div>
      <div
        className="tab-pane fade show active grid md:grid-cols-3 grid-cols-1 gap-4 md:px-12 px-4"
        id="tabs-homeFill"
        role="tabpanel"
        aria-labelledby="tabs-home-tabFill"
      >
        {!isReverse && (
          <div className="flex justify-center">
            <Image
              className="object-contain"
              src="/images/graphic.png.webp"
              alt=""
              width={200}
              height={100}
            />
          </div>
        )}
        <div className="col-span-2">
          <h1 className="md:text-5xl text-3xl text-purple-900 py-4">
            {heading}
          </h1>
          <h3 className="md:text-xl text-pink-500 py-3">{title}</h3>
          <p className="prose prose-a:text-blue-600 prose-strong:text-red-500 text-gray-500 py-6">
            <ReactMarkdown>{details}</ReactMarkdown>
          </p>
        </div>
        {isReverse && (
          <div className="flex justify-center">
            <Image
              className="object-contain"
              src="/images/graphic.png.webp"
              alt=""
              width={200}
              height={100}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
