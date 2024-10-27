import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.js";
import SearchBar from "../SearchBAr/SearchBar.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.js";
import Loader from "../Loader/Loader.js";
import ScrollUp from "../ScrollUp/ScrollUp.js";
import ImageModal from "../ImageModal/ImageModal.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import Background from "../Background/Background.js";
import { fetchPicture } from "../../image-api.js";
import "./App.css";
import { Image } from "./App.types.js";
import { FC } from "react";

const App: FC = () => {
  const initialModal = {
    id: "",
    alt_description: "",
    likes: 0,
    urls: {
      regular: "",
      small: "",
    },
    user: {
      name: "",
      location: "",
    },
  };

  const [pictures, setPictures] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<Image>(initialModal);
  const [scr, setScr] = useState<number>(0);
  const [scrTo, setSrcTo] = useState<number>(700);

  window.onscroll = () => {
    if (window.scrollY > 400) {
      setScr(1);
    } else {
      setScr(0);
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPicture(page, query);
        setPictures((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    setSrcTo((prev) => prev + 10);
    setTimeout(() => {
      window.scrollBy({
        top: scrTo,
        behavior: "smooth",
      });
    }, 500);
  };

  const handleQuery = (values: string): void => {
    setQuery(values);
    setPictures([]);
    setPage(1);
  };

  const openModal = (modalSrc: Image) => {
    setIsOpen(true);
    setModal(modalSrc);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Background />

      <SearchBar searchQuery={handleQuery} query={query} />

      {!!pictures.length && (
        <ImageGallery images={pictures} openModal={openModal} />
      )}

      {!!pictures.length && page < totalPages && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}

      {isLoading && <Loader />}

      {!!scr && <ScrollUp />}

      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        modal={modal}
      ></ImageModal>

      {isError && <ErrorMessage />}
    </>
  );
};

export default App;
