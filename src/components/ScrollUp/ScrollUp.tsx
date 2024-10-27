import css from "./ScrollUp.module.css";
import { RxThickArrowUp } from "react-icons/rx";
import { FC } from "react";

const ScrollUp: FC = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <button className={css.btnScroll} onClick={handleScroll}>
        <RxThickArrowUp className={css.iconScroll} />
      </button>
    </div>
  );
};

export default ScrollUp;
