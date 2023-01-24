import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Cardcontent from "./Cardcontent";
import ComponentHeader from "./global/ComponentHeader";
import SliderCard from "./SliderCard";



export default function Testimonials() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <div className="container mx-auto md:py-20 py-14">
            <ComponentHeader heading="Testimonials" title="What our customers says"/> 
      <div className="px-16 mx-auto py-16 ">
        <Slider {...settings}>
          <div >
            <Image className="rounded-full" src="/images/client.png.webp" alt="" width={100} height={100} />
            <p>Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</p>
            <h1>Crystal Gordon</h1>
            <h3>United states</h3>
          </div>
          <div >
          <Image className="rounded-full" src="/images/client.png.webp" alt="" width={100} height={100} />
            <p>Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</p>
            <h1>Crystal Gordon</h1>
            <h3>United states</h3>
          </div>
          <div>
          <Image className="rounded-full" src="/images/client.png.webp" alt="" width={100} height={100} />
            <p>Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.</p>
            <h1>Crystal Gordon</h1>
            <h3>United states</h3>
          </div>
        </Slider>
      </div>
  </div>
    );
  
}
