import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieList from "./components/MovieList/MovieList";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/MovieCast" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/MovieCast" element={<MovieCast />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/MovieReviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
