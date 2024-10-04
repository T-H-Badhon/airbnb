// "use client";
// import ClientHydration from "./components/ClientHydration";
// import Container from "./components/Container";
// import { useEffect, useState } from "react";
// import HomeCard from "./components/Home/HomeCard";
// interface Image {
//   url: string;
//   altText?: string; // Optional if your ImageSchema has other fields, add them here
// }

// interface Amenity {
//   name: string;
//   description?: string; // Optional if your AmenitiesSchema has other fields, add them here
// }

// interface Listing {
//   id: string;
//   images: Image[];
//   amenities: Amenity[];
//   name: string;
//   summary?: string;
//   type: string;
//   location: string;
//   bedRoom: string;
//   price: number;
//   taxPrice: number;
//   afterTaxPrice: number;
//   availableStart: Date;
//   availableEnd: Date;
//   createdAt?: Date; // For timestamps
//   updatedAt?: Date; // For timestamps
// }

// export default function Home() {
//   const [listings, setListings] = useState<Listing[]>([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchListings = async () => {
//         try {
//           const res = await fetch("http://localhost:5000/api/v1/listing");
//           const data = await res.json();
//           // console.log('new',data.data)
//           setListings(data.data);
//         } catch (error) {
//           console.error("Error fetching listings:", error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchListings();
//     }, []);
//     console.log(listings)
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
//   // const isEmpty = true;
//   // if(isEmpty){
//   //   return (
//   //     <ClientHydration>
//   //       <EmptyState/>
//   //     </ClientHydration>
//   //   )
//   // }
//   return (
//     <ClientHydration>
//       <Container>
//         <div >
//       <div className="grid grid-cols-4 gap-x-8">
//        {
//         listings.map((listing) => {
//           return (
//             <HomeCard
//               key={listing.id}
//               listing={listing}
//             />
//           )
//         })
//        }
//       </div>
//         </div>
//       </Container>
//     </ClientHydration>
//   );
// }


"use client";
import ClientHydration from "./components/ClientHydration";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import HomeCard from "./components/Home/HomeCard";
import { useSearchParams } from "next/navigation"; // Import to access search parameters

interface Image {
  url: string;
  altText?: string;
}

interface Amenity {
  name: string;
  description?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams(); 
  console.log('params',params)

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true); // Set loading state to true while fetching

      try {
        // Get the category from the query parameters (type=room or type=windmill, etc.)
        const type = params?.get("type");

        // Update the fetch URL based on the selected category
        const url = type
          ? `http://localhost:5000/api/v1/listing?type=${type}`
          : "http://localhost:5000/api/v1/listing";

        const res = await fetch(url);
        const data = await res.json();

        // Set listings data from API response
        setListings(data.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchListings(); // Fetch listings whenever params (category filter) change
  }, [params]); // Dependency on params to trigger re-fetching when URL changes

  // Display loading state while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ClientHydration>
      <Container>
        <div>
          <div className="grid grid-cols-4 gap-x-8">
            {listings.map((listing) => (
              <HomeCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </Container>
    </ClientHydration>
  );
}
