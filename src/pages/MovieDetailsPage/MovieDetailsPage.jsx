import css from "./MovieDetailsPage.module.css";
import { fetchMovieDetails } from "../../service/movieApi";
import { Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import clsx from "clsx";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const release_date = movieDetails.release_date
    ? new Date(movieDetails.release_date)
    : null;
  const imageMoviePoster = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image+Available";
  const voteAverage = movieDetails.vote_average
    ? Math.round(movieDetails.vote_average * 10)
    : null;

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovieDetail(data);
      } catch (err) {
        console.log(err);
        toast.error("Sorry! Please, can try again later.");
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Section>
      {loading && <Loader />}
      <GoBackBtn />
      <div className={css.movieDetailsContainer}>
        <img
          src={imageMoviePoster}
          alt={movieDetails.original_title}
          className={css.movieDetailsImage}
        />
        <div className={css.movieDetails}>
          <h2 className={css.movieDetailsTitle}>
            {movieDetails.original_title}{" "}
            {release_date && `(${release_date.getFullYear()})`}
          </h2>
          <p>
            Use Score:{" "}
            {voteAverage !== null ? `${voteAverage}%` : "Not Available"}
          </p>
          <h3 className={css.movieDetailsOverviewTitle}>Overview:</h3>
          <p className={css.movieDetailsOverview}>{movieDetails.overview}</p>
          <h3 className={css.movieDetailsGenresTitle}>Genres:</h3>
          <ul className={css.movieDetailsGenres}>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div className={css.movieDetailsInformation}>
        <h3 className={css.movieDetailsInformTitle}>Additional information</h3>
        <div className={css.movieDetailsLink}>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Section>
  );
}

export default MovieDetailsPage;
