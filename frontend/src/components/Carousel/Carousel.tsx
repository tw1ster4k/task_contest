import { useState, useEffect } from "react"
import { cn } from "@bem-react/classname"
import "./Carousel.css"

interface CarouselProps {
    images: string[];
  }

const Carousel = ({ images }: CarouselProps) => {
    const cnCarousel = cn("Carousel")
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
      <div className={cnCarousel()}>
        <img className={cnCarousel("Image")} src={images[currentSlide]} alt={`slide-${currentSlide}`} />
      </div>
    );
  }


export default Carousel