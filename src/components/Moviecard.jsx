import React from "react";
import "./Movicard.css";

function Moviecard() {
  return (
    <div className="moviecard">
      <img className="coverimg" src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
      <span className="moviename">Gardian</span>
      <div className="movieinfo">
          <span>2021</span>
          <span>Movie</span>
      </div>
    </div>
  );
}

export default Moviecard;
