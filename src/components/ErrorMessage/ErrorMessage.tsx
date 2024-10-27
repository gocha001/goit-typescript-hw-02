import css from "./ErrorMessage.module.css";
import { FC } from 'react';

const ErrorMessage: FC = () => {
  return (
    <div className={css.error}>Oops... Something went wrong...Try again.</div>
  );
};

export default ErrorMessage;
