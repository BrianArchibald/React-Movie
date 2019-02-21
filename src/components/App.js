import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";

class App extends React.Component {
  state = { videos: [] };

  componentDidMount() {
    this.onTermSubmit("Tom Hanks");
  }

  onTermSubmit = async term => {
    const response = await moviedb.get("/search", {
      //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a57886cc6687c600789f727fdbb40700&page=
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Results />
      </div>
    );
  }
}
export default App;
