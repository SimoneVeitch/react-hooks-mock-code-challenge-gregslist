import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
      });
  }, []);

  function handleSearch(query) {
    const filtered = listings.filter((listing) =>
      listing.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredListings(filtered);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={listings} filteredListings={filteredListings} setFilteredListings={setFilteredListings} />
    </div>
  );
}

export default App;
