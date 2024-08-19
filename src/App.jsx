import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast";
// import MovieReviews from "./components/MovieReviews";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
