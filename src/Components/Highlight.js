import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import Cardcontent from './Cardcontent';
import ComponentHeader from './global/ComponentHeader';
export default function Highlight() {
  return (
    <section className="section  bg-slate-200 ">
      <div className="container mx-auto  md:py-20 py-8 ">
        <ComponentHeader heading="HIGHLIGHTS" title="Feature you love" />

        <div className=" px-4 py-6 sm:px-6 lg:px-8">
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
