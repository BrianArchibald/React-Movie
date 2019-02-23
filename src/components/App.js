import React from "react";
import SearchBar from "./SearchBar";
//import Results from "./Results";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      movieID: "",
      original_title: "",
      tagline: "",
      overview: "",
      homepage: "",
      poster: "",
      production: "",
      production_countries: "",
      genre: "",
      release: "",
      vote: "",
      runtime: "",
      revenue: "",
      backdrop: ""
    };
  }
  // componentDidMount() {
  //   this.onTermSubmit("Tom Hanks");
  // }

  // onTermSubmit = async term => {
  //   const response = await moviedb.get("/search", {
  //     //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a57886cc6687c600789f727fdbb40700&page=
  //   });
  // };

  componentDidMount() {
    //let url = `https://api.themoviedb.org/3/movie/${
    //  this.state.movieID
    //}?&api_key=cfe422613b250f702980a3bbf9e90716`;

    let url =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a57886cc6687c600789f727fdbb40700";
    axios
      .get(url)
      //.then(res => res.json())

      .then(res => {
        console.log(res.data.results[0]);
        this.setState({ movieList: res.data.results });
        // this.setState({
        //   movieID: res.data.id,
        //   original_title: res.data.original_title,
        //   tagline: res.data.tagline,
        //   overview: res.data.overview,
        //   homepage: res.data.homepage,
        //   poster: res.data.poster_path,
        //   production: res.data.production_companies,
        //   production_countries: res.data.production_countries,
        //   genre: res.data.genres,
        //   release: res.data.release_date,
        //   vote: res.data.vote_average,
        //   runtime: res.data.runtime,
        //   revenue: res.data.revenue,
        //   backdrop: res.data.backdrop_path
        // });
        console.log(this.state.movieList[0].id);
      });
  }
  render() {
    //const posterURL = "http://image.tmdb.org/t/p/w185/"

    return (
      <div className="App">
        <SearchBar />

        {this.state.movieList.map(movie => (
          <section>
          <div>
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
          </div>
          <h3>{movie.title}</h3>
          <h4>{movie.}

          </section>
          
        ))}
      </div>
    );
  }
}
export default App;
