import css from "./Section.module.css";

function Section({ children }) {
  return <section className={css.section}>{children}</section>;
}

export default Section;
