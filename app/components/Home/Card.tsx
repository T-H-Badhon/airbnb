import { useState } from "react";
import Image from "next/image";

const Card = ({ listing }) => {
  const { name, price, location, images } = listing; // Destructure listing to get name, location, and images

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    if (images.length > 0) { // Check if there are images
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  // Function to go to the previous image
  const prevSlide = () => {
    if (images.length > 0) { // Check if there are images
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="col-span-1 flex cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-xl"> {/* Fixed dimensions */}
          {images.length > 0 ? ( // Check if images are available
            <Image
              src={images[currentIndex]?.url} // Ensure the URL is valid
              alt={`Image of ${name}`}
              fill // Use fill to cover the figure element
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-xl"> {/* Placeholder for no image */}
              <p>No Image Available</p>
            </div>
          )}

          {/* Navigation buttons */}
          {images.length > 1 && ( // Show buttons only if there is more than one image
            <>
              {currentIndex > 0 && ( // Show the Previous button only if not on the first image
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  &#10094; {/* Left arrow */}
                </button>
              )}
              {currentIndex < images.length - 1 && ( // Show the Next button only if not on the last image
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  &#10095; {/* Right arrow */}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
