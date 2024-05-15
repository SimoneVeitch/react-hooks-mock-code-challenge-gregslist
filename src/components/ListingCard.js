import React from "react";

function ListingCard( { id, description, image="https://via.placeholder.com/300x300", location, onFavoriteClick, isFavorite, onDeleteListing}) {

function handleClick() {
    onFavoriteClick();
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteListing({id}));
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
