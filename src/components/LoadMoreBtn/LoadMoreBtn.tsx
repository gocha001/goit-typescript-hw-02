import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={css.load}>
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
