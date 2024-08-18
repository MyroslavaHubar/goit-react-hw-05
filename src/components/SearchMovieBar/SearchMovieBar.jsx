// import css from './SearchMovieBar.module.css'

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
          background: "white",
          color: "#000",
        },
      });
    }
    onSubmit(value);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </>
  );
}

export default SearchMovieBar;
