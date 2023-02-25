import './Carousel.css';

export default function CarouselItem({ slide }) {
    return (
      <div className="w-full inline-block">
        <img src={slide} alt="FN+" />
      </div> 
    )
}