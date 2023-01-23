import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import Cardcontent from './Cardcontent';
export default function Feature() {
  return (
    <section className="section  bg-slate-200 ">
      <div className="container mx-auto">
        <div className="text-center pt-10">
          <h3>HIGHLIGHTS</h3>
          <h1 className="text-4xl text-purple-900 font-bold">
            Features you love
          </h1>
        </div>

        <div className=" px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <Cardcontent
              icon={<BsEmojiSmile className="h-10 w-10" />}
              title="Simple"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
            <Cardcontent
              icon={<AiOutlineSetting className="h-10 w-10" />}
              title="Customize"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
            <Cardcontent
              icon={<FiLock className="h-10 w-10" />}
              title="Secure"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
