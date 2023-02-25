import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import './Carousel.css';

export default function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
        }, 3000)

        return () => clearInterval(slideInterval)
    }, [slides.length])

    return (
        <div className='m-auto overflow-hidden max-w-full'>
            <div 
                className=" whitespace-nowrap transition-none"
                style={{ transform: `translateX(${-currentSlide * 100}%)`}}
            >
                {slides.map((slide, index) => (
                    <CarouselItem slide={slide} key={index}/>
                ))}
            </div>
        </div>
    )
}
