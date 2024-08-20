import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";

function NotFoundPage() {
  return (
    <Section>
      <Link to="/" className={css.buttonNotPage}>
        Please, back to Home Page
      </Link>
    </Section>
  );
}

export default NotFoundPage;
