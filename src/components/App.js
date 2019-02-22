import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movieID: 157336 };
  }
  // componentDidMount() {
  //   this.onTermSubmit("Tom Hanks");
  // }

  // onTermSubmit = async term => {
  //   const response = await moviedb.get("/search", {
  //     //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a57886cc6687c600789f727fdbb40700&page=
  //   });
  // };

  //     this.setState({
  //       movieID: data.id,
  //       original_title: data.original_title,
  //       tagline: data.tagline,
  //       overview: data.overview,
  //       homepage: data.homepage,
  //       poster: data.poster_path,
  //       production: data.production_companies,
  //       production_countries: data.production_countries,
  //       genre: data.genres,
  //       release: data.release_date,
  //       vote: data.vote_average,
  //       runtime: data.runtime,
  //       revenue: data.revenue,
  //       backdrop: data.backdrop_path

  //     })
  //   })

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${
      this.state.movieID
    }?&api_key=cfe422613b250f702980a3bbf9e90716`;
    axios
      .get(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieID: data.id,
          original_title: data.original_title,
          tagline: data.tagline,
          overview: data.overview,
          homepage: data.homepage,
          poster: data.poster_path,
          production: data.production_companies,
          production_countries: data.production_countries,
          genre: data.genres,
          release: data.release_date,
          vote: data.vote_average,
          runtime: data.runtime,
          revenue: data.revenue,
          backdrop: data.backdrop_path
        });
        console.log(this.state);
      });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Results data={this.state} />
      </div>
    );
  }
}
export default App;
