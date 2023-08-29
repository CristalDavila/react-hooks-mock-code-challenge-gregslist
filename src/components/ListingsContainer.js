import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer( {listings, handle, search}) {

  
  const filteredListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
  console.log(filteredListings)
  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => <ListingCard key={listing.id} data={listing} handle={handle}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
