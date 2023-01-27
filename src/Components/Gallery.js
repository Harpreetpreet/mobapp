import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import ComponentHeader from './global/ComponentHeader';


const Gallery = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1200,
    arrows: false,
    dots: true
  };
  return (
    <div className=" bg-slate-100">
      <div className="max-w-[1200px] mx-auto py-20 px-6">
        <ComponentHeader heading="Gallery" title="App Screenshots" />
        <div className="cursor-pointer py-16 px-6">
          <Slider {...settings}>
            <div className="px-3">
              <Image src="/images/TimeTracker.webp" alt="" width={340} height={400} className="object-contain" />
            </div>
            <div className="px-3">
            <Image src="/images/Savetime.webp" alt="" width={340} height={400} className="object-contain" />
            </div>
            <div className="px-3">
            <Image src="/images/TimeTracker.webp" alt="" width={340} height={400} className="object-contain" />
            </div>
            <div className="px-3">
            <Image src="/images/Savetime.webp" alt="" width={340} height={400} className="object-contain" />
            </div>
            <div className="px-3">
            <Image src="/images/TimeTracker.webp" alt="" width={340} height={400} className="object-contain" />
            </div> 
            <div className="px-3">
            <Image src="/images/Runtime.webp" alt="" width={340} height={400} className="object-contain" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
