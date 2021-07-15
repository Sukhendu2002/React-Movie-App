import React from "react";
import Moviecard from "./Moviecard";
import "./Movielist.css";
import Navber from "./Navber";

function Movielist() {
  return (
    <div className="movielist">
      {movieList?.length
        ? movieList.map(() => <Moviecard />)
        : "No Movie Search"}
      <Moviecard />
    </div>
  );
}

export default Movielist;
