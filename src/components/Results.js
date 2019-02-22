import React from "react";

function Results(props) {
  return (
    <div className="results">
      <img src={props.data.poster_path} alt="movie poster" />
      <h2>{props.data.original_title}</h2>
      <h2>{props.data.movieID}</h2>
      <h2>{props.data.movieID}</h2>
    </div>
  );
}

export default Results;
