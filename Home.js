import React from 'react'

import Header from '../component/Header'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import Carousel from '../component/Carousel'

const Details=[{
data:"Blade Runner 2049",
discription:"Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long buried secret that has the potential to plunge what’s left of society into chaos. K’s discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years"
}
]
const Home = () => {
  return (
    <>
    <Header />
      <Banner item={Details} />
 <Carousel /> 
      <Footer/>
    </>
  )
}

export default Home
