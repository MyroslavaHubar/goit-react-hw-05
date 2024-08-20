import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/movieApi";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const gethMovieReviews = async () => {
      try {
        const dataReviews = await fetchMovieReviews(movieId);
        console.log(dataReviews);
        setReviews(dataReviews.results);
      } catch (err) {
        console.log(err);
      }
    };
    gethMovieReviews();
  }, [movieId]);

  return (
    <div className={css.movieReviewsContainer}>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id} className={css.movieReviewsItem}>
                <h4 className={css.movieReviewsAuthor}>{review.author}</h4>
                <p className={css.movieReviewsContent}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.movieReviewsMessage}>
          Sorry. But there are no reviews for this film yet.
        </p>
      )}
    </div>
  );
}

export default MovieReviews;
