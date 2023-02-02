import Image from 'next/image';
import React from 'react';

export default function Createaccount() {
  return (
    <section className=" bg-slate-100">
      <div className="container mx-auto md:px-20 px-2 md:py-20 py-10 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-2 space-y-16 pt-10">
            <div className="flex gap-4 border-b-2 border-gray-300  ">
              <div>
                <div className="bg-white rounded-full shadow hover:bg-pink-500 h-24 w-24 flex text-3xl items-center justify-center">
                  1
                </div>
              </div>
              <div className="">
                <h1 className="text-3xl text-purple-900 pb-3">Create an Account</h1>
                <p className="text-gray-500 md:pb-16 pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium obcaecati vel
                  exercitationem
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b-2 border-gray-300">
              <div>
                <div className="bg-white rounded-full shadow hover:bg-pink-500 h-24 w-24 flex text-3xl items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h1 className="text-3xl text-purple-900 pb-3">Share with friends</h1>
                <p className="text-gray-500 md:pb-16 pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium obcaecati vel
                  exercitationem
                </p>
              </div>
            </div>  <div className="flex gap-4 border-b-2 border-gray-300">
              <div>
                <div className="bg-white rounded-full shadow hover:bg-pink-500 h-24 w-24 flex text-3xl items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h1 className="text-3xl text-purple-900 pb-3">Enjoy your life</h1>
                <p className="text-gray-500 md:pb-16 pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium obcaecati vel
                  exercitationem
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <Image src="/images/iphone.png" alt="" width={600} height={900} />
          </div>
        </div>
      </div>
    </section>
  );
}
