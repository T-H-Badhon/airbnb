"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

const HomePage = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchListings = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/v1/listing");
          const data = await res.json();
          setListings(data);
        } catch (error) {
          console.error("Error fetching listings:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchListings();
    }, []);
    console.log(listings.data)
  
    if (loading) {
      return <p>Loading...</p>;
    }
          
    return (
        <div>
            {listings.data.map(listing => 
                <Card 
                key={listing._id}
                listing={listing}
                >
                </Card>
            )}
        </div>
    );
};

export default HomePage;