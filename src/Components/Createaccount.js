import Image from 'next/image'
import React from 'react'
import Cardcontent from './Cardcontent'


export default function Createaccount() {
  return (
    <section className=" bg-slate-200">
    <div className="container mx-auto md:px-32 px-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-2">
        <Cardcontent
            //   icon={<BsEmojiSmile className="h-10 w-10" />}
              title="Create an Account"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
            <Cardcontent
            //   icon={<BsEmojiSmile className="h-10 w-10" />}
              title="Share with friends"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
            <Cardcontent
            //   icon={<BsEmojiSmile className="h-10 w-10" />}
              title="Enjoy your life"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?"
            />
        </div>
        <div>
        <Image src="/images/iphone.png" alt='' width={600} height={900} />
        </div>
        </div>
      
    </div>
    </section>
  )
}
