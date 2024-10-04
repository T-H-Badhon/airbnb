/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import CardButton from "./CardButton";
import LiveOption from "./LiveOption";

const HomeCard = ({ listing }: { listing: any }) => {
  const {id, name, type, location, images, summary,price } = listing;
  console.log(name, images[0], location, type);

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className=" relative w-full h-96 mt-40">
        
        {/* Parent container for responsive image */}
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            src={images[0].url}
            alt={name}
            height={500}
            width={700}
            // layout="fill" // Makes the image fill its parent container
            objectFit="cover" // Ensures the image covers the entire container
            className="h-full w-full group-hover:scale-110 transition " // Optional: adds rounded corners
          />
          <div className="absolute top-3 right-3">
            <CardButton />
          </div>
          <div className="absolute top-3 left-3">
          <LiveOption />
          </div>
          
        </div>
        <div className="font-semibold text-lg">
          {summary}
        </div>
        <div className="font-semibold text-lg">
          {name}
        </div>
        <div className="font-semibold text-lg">
          ${price} per night
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
