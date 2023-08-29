import React, { useState } from "react";





function ListingCard(props) {

  const data = props.data
  
  const description = data["description"]
  const image =data["image"]
  const location = data["location"]
  const id = data["id"]

  const handle = props.handle

  const [favorited, setFavorited] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={(e)=> setFavorited(!favorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={(e)=> setFavorited(!favorited)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handle(id)}>🗑</button>
      </div>
    </li>
  );
}


export default ListingCard;
