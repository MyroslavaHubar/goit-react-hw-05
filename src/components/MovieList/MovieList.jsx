import css from "./MovieList.module.css";
import MovieBackdropPath from "../MovieBackdropPath/MovieBackdropPath";

function MovieList({ movies }) {
  return (
    <div>
      <ul className={css.movieList}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={css.movieListItem}>
              <MovieBackdropPath movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;
