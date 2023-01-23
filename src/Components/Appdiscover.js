import Image from 'next/image';
import React from 'react';
import { TfiMobile } from 'react-icons/tfi';
import Button from './Button';

export default function Appdiscover() {
  return (
    <div className="container mx-auto md:px-16 px-6">
      <div className="grid md:grid-cols-2 grid-cols-1  ">
        <div></div>
        <div className="py-12 z-20">
          <TfiMobile className="h-16 w-12 text-pink-600" />
          <h2 className=" text-purple-900 md:text-5xl text-3xl py-6">
            Discover our App
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in
            omnis, labore quos cupiditate maxime, vitae, id vero iusto enim amet
            minus libero nihil velit dolore ipsum. Tempore, pariatur sunt?
          </p>
          <Button> READ MORE</Button>
        </div>
      </div>
      <div className="md:-mt-32 z-10">
        <Image
          className=""
          src="/images/perspective.png.webp"
          alt=""
          width={700}
          height={1000}
        />
      </div>
    </div>
  );
}
