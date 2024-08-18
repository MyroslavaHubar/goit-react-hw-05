// import css from './HomePage.module.css'

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/movieApi";
import Section from "../../components/Section/Section";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesList = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, []);

  return (
    <Section>
      {loading && <Loader />}
      <h1>The films that are trending</h1>
      <MovieList movies={movies} />
    </Section>
  );
}

export default HomePage;
