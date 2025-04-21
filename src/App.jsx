import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchGalleryWithPhoto } from "./Gallery-api";

function App() {
  const [gallery, setGallery] = useState([]);
  // const [query, setQuery] = useState("");
  // const [page, setPage];
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // modal

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleClick = (photo) => {
    setSelectedImage(photo);
    openModal();
  };
  const handleSearch = async (photo) => {
    try {
      setGallery([]);
      setErrorMessage(false);
      setLoading(true);
      const data = await fetchGalleryWithPhoto(photo);
      setGallery(data);
    } catch (error) {
      console.error("Fetch error", error);
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      <ImageModal
        selectedImage={selectedImage}
        isOpen={modalIsOpen}
        onWishClose={closeModal}
      />
      <ImageGallery sendImages={gallery} handleClick={handleClick} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage />}
      <LoadMoreBtn />
    </>
  );
}

export default App;
