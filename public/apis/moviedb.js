import axios from "axios";

const KEY = "a57886cc6687c600789f727fdbb40700";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?",

  params: {
    api_key: KEY
  }
});
