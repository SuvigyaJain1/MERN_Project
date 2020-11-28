import React, { useState } from 'react'
import axios from 'axios';
import SearchResult from './SearchResult'

export default function GroupPage() {

  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const [succ, setSucc] = useState(false);
  const [click, setClick] = useState(false);


  function handleChange() {
    setClick(true);
    console.log(search);
    axios.get('/api/groups/search/'.concat(search))
      .then(res => {
        setSucc(res.data.message);
        if (res.data.user)
          setFound(prevFound => [res.data.user]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const error = click ? succ ? false : true : false;


  return (
    <div className="search-page">
      <h1 style={{ padding: "100px 0 0 0", fontSize: "60px" }}>EXPLORE</h1>
      <input type="text" placeholder="Enter the email address of the user" style={{ width: "600px", height: "30px" }} value={search} onChange={(e) => {
        setSearch(e.target.value);
      }} />
      <br />
      <button style={{ margin: "7px", fontSize: "20px" }} onClick={() => {
        handleChange();
      }}>Search</button>
      <div>
        {succ ? found.map(e => <SearchResult user={e} />) : ""}
      </div>
      <div hidden={!error}>
        <h3>User not found</h3>
      </div>
    </div >
  );
}
