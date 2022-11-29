import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    <div className='relative' id='top'>
        <div className='absolute bottom-0 z-10 w-full h-20 bg-gradient-to-t from-white to-transparent ' />
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            verticalSwipe="natural"
        >
            <div> 
                <img loading='lazy' src='https://links.papareact.com/gi1' alt='banner one' />
            </div>
            <div> 
                <img loading='lazy' src='https://links.papareact.com/6ff' alt='banner two' />
            </div>
            <div> 
                <img loading='lazy' src='https://links.papareact.com/7ma' alt='banner three' />
            </div>
            <div> 
                <img loading='lazy' src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg' alt='banner one' />
            </div>
            <div> 
                <img loading='lazy' src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg' alt='banner one' />
            </div>

        </Carousel>
    </div>
  )
}

export default Banner