import axios from "axios";

class MovieService {
  static getInstance(): MovieService {
    return new MovieService();
  }

  public async fetchMovies(query: string) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "5a3e8abc", // Replace with your OMDb API key
        s: query, // Search by a more specific query term
      },
    });
    return response.data.Search;
  }

  public async fetchMovieDetail(id: string) {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "5a3e8abc",
        i: id,
      },
    });
    console.log("detal", response.data);
    return response.data;
  }
}

export const movieService = MovieService.getInstance();
