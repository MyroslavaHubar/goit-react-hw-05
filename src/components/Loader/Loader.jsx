// import css from './Loader.module.css'

import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
