import React from "react";
//import MovieItem from "./MovieItem";

// const Results = props {
//     const list = props.map(movie => (
//       <div>
//         {movie.title}
//       </div>
//     ))
//}
const Results = props => {
  const renderedList = props.id.map(id => {
    return <div>{id}</div>;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

//return <div className="movie-list">{renderedList}</div>;
// this.state.movieList.map(movie => (
//   <div key={movie.id}>
//     {movie.title}
//   </div>
// ))

// return (
//   <div className="results">
//     <img src={props.data.poster} alt="movie poster" />
//     <h2>{props.data.original_title}</h2>
//     <h3>{props.data.overview}</h3>
//     <h2>{props.data.movieID}</h2>
//   </div>
// );
//};

export default Results;
