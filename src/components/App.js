import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";
import ListingCard from "./ListingCard";


function App() {

  const [listings, setListings] = useState([])
  const [refresh, setRefresh] = useState(0)
  const [search, setSearch] = useState("");


  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    }
    )
    setRefresh(refresh + 1)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => setListings(data))
  }, [refresh]
  )

  return (
    <div className="app">
      <p>Hello</p>
      <Header onSearch={setSearch} />
      <ListingsContainer listings={listings} handle={handleDelete} search={search} />
    </div>
  );
}

export default App
