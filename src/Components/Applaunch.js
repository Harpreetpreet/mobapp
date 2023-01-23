import Image from 'next/image';
import React from 'react';
import { TfiRocket } from 'react-icons/tfi';
import Button from './Button';

export default function Applaunch() {
  return (
    <div className="container mx-auto md:px-11 px-6 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <Image
            src="/images/dualphone.png.webp"
            alt="/"
            width={500}
            height={700}
          />
        </div>
        <div className="md:pt-60 pt-5">
          <TfiRocket className="h-12 w-12 text-pink-600" />
          <h1 className=" text-purple-900 md:text-5xl text-3xl py-6">
            Launch your App
          </h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos maiores, ea odit reprehenderit sint inventore aspernatur
            voluptates unde repellendus aliquid! Dolor ipsam alias in
            accusantium similique optio illo sint.
          </p>
          <Button>Read More </Button>
        </div>
      </div>
    </div>
  );
}
