import css from "./MovieBackdropPath.module.css";
import { Link, useLocation } from "react-router-dom";

function MovieBackdropPath({ movie }) {
  const imageMovie = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  const location = useLocation();
  return (
    <>
      <Link state={location} to={`/movies/${movie.id}`}>
        <img src={imageMovie} alt={movie.title} className={css.movieImg} />
        <p className={css.movieName}>{movie.title}</p>
      </Link>
    </>
  );
}

export default MovieBackdropPath;
