import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import newsImage from '/news.png';

interface NewsDetailCarouselProps {
  images?: string[];
}

export const NewsDetailCarousel = ({ images = [newsImage, newsImage, newsImage] }: NewsDetailCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full mb-8">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`News image ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition-all duration-300 hover:bg-opacity-70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition-all duration-300 hover:bg-opacity-70"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

