import css from "./Loader.module.css";

import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin
        visible={true}
        width="300"
        color="rgb(219, 68, 3)"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loader;
