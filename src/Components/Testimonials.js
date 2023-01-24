import Image from 'next/image'
import React from 'react'
import ComponentHeader from './global/ComponentHeader'

const Testimonials = () => {
  return (
    <section className="py-12">
    <div className="container mx-auto">
      <ComponentHeader heading="Testimonials" title="What our customers says"/>
      <Image src="/images/" alt=''
    </div>
    </section>
  )
}

export default Testimonials
