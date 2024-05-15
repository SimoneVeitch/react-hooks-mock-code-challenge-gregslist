import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, filteredListings, setFilteredListings }) {

function handleFavoriteClick(id) {
    setFilteredListings((prevListings) =>
      prevListings.map((listing) =>
        listing.id === id ? { ...listing, isFavorite: !listing.isFavorite } : listing
      )
    );
  }

  function handleDeleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setFilteredListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
      });
  }

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard 
          key={listing.id}
          description={listing.description}
            image={listing.image}
            location={listing.location}
            isFavorite={listing.isFavorite}
            onFavoriteClick={() => handleFavoriteClick(listing.id)}
            onDeleteListing={() => handleDeleteListing(listing.id)}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
