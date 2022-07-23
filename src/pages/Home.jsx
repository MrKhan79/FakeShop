import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ProductHeading from '../components/ProductHeading'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar style={{position:"fixed"}}/>
      <Slider />
      <Categories />
      <ProductHeading />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
