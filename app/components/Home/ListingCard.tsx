import { useState } from "react";
import Image from "next/image";

const ListingCard = ({ listing }) => {
  const { name, location, images } = listing; // Destructure listing to get name, location, and images

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
    <div className="card bg-base-100 w-[400px] h-[400px] shadow-xl relative mt-4"> {/* Card dimensions */}
      <figure className="relative w-full h-[300px]">
        {images.length > 0 ? ( // Check if images are available
          <Image
            src={images[currentIndex]?.url} // Ensure the URL is valid
            alt={`Image of ${name}`}
            layout="fill" // Use fill to cover the figure element
            objectFit="cover" // Maintain aspect ratio and cover the area
            className="rounded-t-xl transition-transform duration-500 ease-in-out"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-t-xl"> {/* Placeholder for no image */}
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
      </figure>
      <div className="card-body h-[100px] flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
