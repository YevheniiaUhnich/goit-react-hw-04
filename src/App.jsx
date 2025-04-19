import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageCard from "./components/ImageCard/ImageCard";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleSearch = async (photo) => {
    try {
      setGallery([]);
      setErrorMessage(false);
      setLoading(true);
      const data = await fetchGalleryWithPhoto(photo);
      setGallery(data);
    } catch (errorMessage) {
      setErrorMessage(true);
    } finally {
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {errorMessage && <ErrorMessage />}

      <LoadMoreBtn />

      <ImageModal />
      <ImageGallery />
      <ImageCard />
    </>
  );
}

export default App;
