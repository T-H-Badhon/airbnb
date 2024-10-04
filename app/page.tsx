"use client";
import ClientHydration from "./components/ClientHydration";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import HomeCard from "./components/Home/HomeCard";
interface Image {
  url: string;
  altText?: string; // Optional if your ImageSchema has other fields, add them here
}

interface Amenity {
  name: string;
  description?: string; // Optional if your AmenitiesSchema has other fields, add them here
}

interface Listing {
  id: string;
  images: Image[];
  amenities: Amenity[];
  name: string;
  summary?: string;
  type: string;
  location: string;
  bedRoom: string;
  price: number;
  taxPrice: number;
  afterTaxPrice: number;
  availableStart: Date;
  availableEnd: Date;
  createdAt?: Date; // For timestamps
  updatedAt?: Date; // For timestamps
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchListings = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/v1/listing");
          const data = await res.json();
          // console.log('new',data.data)
          setListings(data.data);
        } catch (error) {
          console.error("Error fetching listings:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchListings();
    }, []);
    console.log(listings)
  
    if (loading) {
      return <p>Loading...</p>;
    }
  // const isEmpty = true;
  // if(isEmpty){
  //   return (
  //     <ClientHydration>
  //       <EmptyState/>
  //     </ClientHydration>
  //   )
  // }
  return (
    <ClientHydration>
      <Container>
        <div >
      <div className="grid grid-cols-4 gap-x-8">
       {
        listings.map((listing) => {
          return (
            <HomeCard
              key={listing.id}
              listing={listing}
            />
          )
        })
       }
      </div>
        </div>
      </Container>
    </ClientHydration>
  );
}

// import Navbar from "./components/navbar/Navbar";
// // import HomePage from './components/Home/HomePage';

// export default function Home() {
//   // const isEmpty = true;
//   // if(isEmpty){
//   //   return (
//   //     <ClientHydration>
//   //       <EmptyState/>
//   //     </ClientHydration>
//   //   )
//   // }
//   return (
//     <>
//       <Navbar></Navbar>
//       <HomePage></HomePage>
//     </>
   
//   );
// }
