import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Image } from "./types";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const ACCESS_KEY = "hrhTGiWjgENt6WmL1RYlbphzyp2-XdAkyLiu6fKt1JA";

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              per_page: 15,
              client_id: ACCESS_KEY,
            },
          }
        );
        if (response.data.results.length === 0) {
          setError("No images found.");
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
        }
      } catch (err) {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchTerm: string) => {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
