import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { fetchSearchMovie } from "../../service/movieApi";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SearchMovieBar from "../../components/SearchMovieBar/SearchMovieBar";
import Section from "../../components/Section/Section";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("movie");

  useEffect(() => {
    const fetchMoviesPage = async () => {
      if (!query) {
        setMovies([]);
        setSearch(false);
        return;
      }
      setLoading(true);
      try {
        const data = await fetchSearchMovie(query);
        setMovies(data.results);
        setSearch(true);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesPage();
  }, [query]);

  const handleSearch = (searchKeyword) => {
    if (searchKeyword.trim() !== "") {
      setMovies([]);
      setSearchParams({ movie: searchKeyword });
    }
  };

  return (
    <Section>
      <SearchMovieBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
      {movies.length === 0 && search && <NotFoundPage />}
    </Section>
  );
}

export default MoviesPage;
