import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2NlOGE2ZDM4ZjU5YjFiYzhlYWIwOTU3ZjdhNTE4NCIsIm5iZiI6MTcyMzkyNDg0MS40MzQ5NjcsInN1YiI6IjY2YzEwMDVmZmEyY2Q5MjNiMDJlNmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4UXTrgYcLSNAm7dqSEuxABEqGZdqFpx08CuB7j4p9D8",
  accept: "application/json",
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: { query },
  });
  return data;
};

export const fetchMovieDetails = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const fetchMovieCredits = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchMovieReviews = async (movie_id) => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};
