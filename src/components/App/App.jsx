import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

Modal.setAppElement("#root");

function App() {
  const [searchElement, setSearchElement] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeInput = (evt) => {
    setSearchElement(evt.target.value);
  };

  const handleSearchSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchElement, per_page: 12, page: 1 },
          headers: {
            Authorization:
              "Client-ID clh8DLzDDsa7s4a-rCQYNJtiejAJ2cLx3IP1SlhSy_c",
          },
        }
      );
      setImages(response.data.results);
      setPage(2);
      setError(null);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Error fetching images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchElement, per_page: 12, page },
          headers: {
            Authorization:
              "Client-ID clh8DLzDDsa7s4a-rCQYNJtiejAJ2cLx3IP1SlhSy_c",
          },
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more images:", error);
      setError("Error fetching more images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <SearchBar
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSearchSubmit}
      />
      <ImageGallery images={images} openModal={handleOpen} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={handleClose}
        contentLabel="Selected Image"
      >
        <button onClick={handleClose}>Close</button>
        {selectedImage && (
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.description}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
