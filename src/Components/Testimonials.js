import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import ComponentHeader from './global/ComponentHeader';

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section >
    <div className="container mx-auto md:py-20 py-14 px-12">
      <ComponentHeader heading="Testimonials" title="What our customers says" />
      <div className=" justify-center">
        <Slider {...settings}>
            <div>
          <div className="flex justify-center">
            <div className=" max-w-screen-md  text-center">
              <div className="flex justify-center pt-10 ">
                <Image
                  className="rounded-full"
                  src="/images/client.png.webp"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="py-10 text-gray-500 text-xl">
                Uniquely streamline highly efficient scenarios and 24/7
                initiatives. Conveniently embrace multifunctional ideas through
                proactive customer service. Distinctively conceptualize 2.0
                intellectual capital via user-centric partnerships.
              </p>
              <h1 className="text-4xl text-purple-900">Crystal Gordon</h1>
              <h3 className="text-pink-400 pt-2">United states</h3>
            </div>
          </div>
          </div>
          <div>
          <div className="flex justify-center">
          <div className=" max-w-screen-md  text-center">
              <div className="flex justify-center pt-10 ">
                <Image
                  className="rounded-full"
                  src="/images/client.png.webp"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="py-10  text-gray-500 text-xl">
                Uniquely streamline highly efficient scenarios and 24/7
                initiatives. Conveniently embrace multifunctional ideas through
                proactive customer service. Distinctively conceptualize 2.0
                intellectual capital via user-centric partnerships.
              </p>
              <h1 className="text-4xl text-purple-900">Crystal Gordon</h1>
              <h3 className="text-pink-400 pt-2">United states</h3>
            </div>
          </div></div>

          <div>
          <div className="flex justify-center">
          <div className=" max-w-screen-md  text-center">
              <div className="flex justify-center pt-10 ">
                <Image
                  className="rounded-full"
                  src="/images/client.png.webp"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="py-10 text-gray-500 text-xl">
                Uniquely streamline highly efficient scenarios and 24/7
                initiatives. Conveniently embrace multifunctional ideas through
                proactive customer service. Distinctively conceptualize 2.0
                intellectual capital via user-centric partnerships.
              </p>
              <h1 className="text-4xl text-purple-900">Crystal Gordon</h1>
              <h3 className="text-pink-400 pt-2">United states</h3>
            </div>
          </div></div>
        </Slider>
      </div>
    </div>
    </section>
  );
}
