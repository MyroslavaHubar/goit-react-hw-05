import css from "./SearchMovieBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SearchMovieBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter text to search for movies", {
        icon: "❌",
        style: {
          borderRadius: "5px",
          background: "#eddec9",
          color: "#984205",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.searchMovieContainer}>
      <form onSubmit={handleSubmit} className={css.searchMovieForm}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search movies"
          className={css.searchMovieInput}
        />
        <button type="submit" className={css.searchMovieButton}>
          Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
}

export default SearchMovieBar;
