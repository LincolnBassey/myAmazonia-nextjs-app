'use client'
import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Banner = () => {
    const slides = [        
        {
            url:"https://links.papareact.com/gi1"
        },       
        {
            url:"https://links.papareact.com/6ff"
        },
        {
            url:"https://links.papareact.com/7ma"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        setTimeout(() => {
            prevSlide();
        }, 5000)
    }, [currentIndex, prevSlide])

  return (
    <div className='relative w-full h-[580px] group z-10 mt-[5rem]'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="h-full w-full bg-center bg-cover duration-500"></div>
        <div onClick={prevSlide} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30}/>
        </div>
        <div onClick={nextSlide} className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight size={30}/>
        </div>
    </div>
  )
}

export default Banner;