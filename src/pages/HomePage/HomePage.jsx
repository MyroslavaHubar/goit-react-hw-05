// import css from './HomePage.module.css'

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/movieApi";
import Section from "../../components/Section/Section";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  [loading, setLoading] = useState(false);
  [movies, setMovies] = useState([]);

  const fetchMoviesList = async () => {
    setLoading(true);
    try {
      const data = await fetchTrendingMovies();
      console.log(data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      fetchMoviesList();
    }, []);
  };

  return (
    <Section>
      {loading && <Loader />}
      <h1>The films that are trending</h1>
      <MovieList movies={movies} />
    </Section>
  );
}
