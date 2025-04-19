import React from 'react'
import Banner from '../../components/Banner/Banner'
import Choose from '../../components/Choose/Choose'
import Product from '../../components/Product/Product'
import Experience from '../../components/Experience/Experience'
import { Materials } from '../../components/Materials/Materials'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      {/* {banner section} */}
      <div>
        <Banner />
      </div>

      {/* {choose section} */}
      <div>
        <Choose />
      </div>


      {/* {product section} */}
      <div>
        <Product />
      </div>

      {/* {Experience section} */}
      <div>
        <Experience />
      </div>

      {/* {Materials section} */}
      <div>
        <Materials />
      </div>

      {/* {Testimonial section} */}
      <div>
        <Testimonial />
      </div>

    </div>
  )
}

export default Home