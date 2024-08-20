import css from "./MovieDetailsPage.module.css";
import { fetchMovieDetails } from "../../service/movieApi";
import { useEffect, useState } from "react";
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
  const release_date = new Date(movieDetails.release_date);
  const imageMoviePoster = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

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
            {movieDetails.original_title} ({release_date.getFullYear()})
          </h2>
          <p>Use Score: {Math.round(movieDetails.vote_average * 10)}%</p>
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
        <div>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </Section>
  );
}

export default MovieDetailsPage;
