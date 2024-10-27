import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { FC } from "react";

const notify = () => toast.error("This field must be filled.");

interface SearchBarProps {
  query: string;
  searchQuery: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, query }) => {
  const initialValues = {
    query: "",
  };

  interface Object {
    query: string;
  }

  const handleSubmit = (values: Object): void => {
    searchQuery(values.query);
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit" onClick={notify}>
            <FaSearch />
          </button>
          {!query && <Toaster />}
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
