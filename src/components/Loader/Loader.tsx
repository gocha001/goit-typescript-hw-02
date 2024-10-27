import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
