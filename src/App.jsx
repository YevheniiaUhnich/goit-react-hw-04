import { useState, useEffect } from "react";
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
  const [photo, setPhoto] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
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

  const handleSearch = (newPhoto) => {
    setPhoto(newPhoto);
    setGallery([]);
    setPage(1);
  };

  useEffect(() => {
    if (!photo) return;

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMessage(false);

        const data = await fetchGalleryWithPhoto(
          photo,
          page,
          abortController.signal
        );
        console.log("Fetched data:", data);

        setGallery((prev) => [...prev, ...data.photos]);
        setTotalPages(Math.min(data.totalPages, 15));
      } catch (error) {
        console.error("Fetch error", error);
        setErrorMessage(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [photo, page]);

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

      {gallery.length > 0 && page < totalPages && (
        <LoadMoreBtn setPage={setPage} totalPages={totalPages} page={page} />
      )}
    </>
  );
}

export default App;
