import React from 'react'
import PerfumeHero from '../Components/Hero'
import BrandMarquee from '../Components/ProductMarquee'
import PopularProducts from '../Components/popularProducts'
import ProductGridCTA from '../Components/Gallery'
import NewProducts from '../Components/NewProducts'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
   <PerfumeHero />
    <BrandMarquee />
    <PopularProducts />
    <ProductGridCTA />
    <NewProducts />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home