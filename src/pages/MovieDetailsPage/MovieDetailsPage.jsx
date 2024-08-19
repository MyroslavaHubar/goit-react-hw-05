// import css from './MovieDetailsPage.module.css'
import { fetchMovieDetails } from "../../service/movieApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageMoviePoster = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  const releaseDate = new Date(movieDetails.release_date);

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
      <div>
        <img src={imageMoviePoster} alt={movieDetails.original_title} />
        <div>
          <h2>
            {movieDetails.original_title} ({releaseDate.getFullYear()})
          </h2>
          <p>Use Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </Section>
  );
}

export default MovieDetailsPage;
