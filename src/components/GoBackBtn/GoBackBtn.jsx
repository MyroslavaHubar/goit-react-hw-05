// import css from './GoBackBtn.module.css'

import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function GoBackBtn() {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/");

  return <Link to={goBack.current}>Go Back</Link>;
}

export default GoBackBtn;
