import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import PropTypes from "prop-types";
import Loaderhearts from "./components/Loader/Loader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import fetchApi from "./services/fetchApi";
import { toast } from "react-toastify";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [largeImage, setLargeImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetchApi(searchQuery, page)
        .then((resp) => {
          console.log(resp.data.hits);

          if (resp.data.hits.length === 0) {
            toast.error("По такому запросу картинки не найденны!");
            return;
          }
          setImages((prevState) => [...prevState, ...resp.data.hits]);
          setLoading(false);
        })
        .catch((error) => toast.error(error.message));
    }
  }, [searchQuery, page]);

  const onLoadMoreClick = () => {
    setPage((prevState) => prevState + 1);
    setLoading(true);
  };

  const onSubmitHandler = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
    setLoading(true);
  };

  const onItemClick = (largeImageURL) => {
    setLargeImage(largeImageURL);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div>
      <Searchbar onSubmitApp={onSubmitHandler} />
      {loading && <Loaderhearts />}
      {images.length !== 0 && (
        <ImageGallery>
          <ImageGalleryItem imagesArray={images} onClick={onItemClick} />
        </ImageGallery>
      )}
      {images.length !== 0 && (
        <Button text="Load more" onClick={onLoadMoreClick} />
      )}
      {showModal && <Modal onModalClose={toggleModal} modalImg={largeImage} />}
      <ToastContainer autoClose={3000} position="top-center" />
    </div>
  );
};

App.propTypes = {
  searchQuery: PropTypes.string,
  images: PropTypes.array,
  page: PropTypes.number,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  showModal: PropTypes.bool,
  largeImege: PropTypes.string,
};

export default App;
