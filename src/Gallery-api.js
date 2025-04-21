import axios from "axios";

const apiKey = "Ud4YJgNphxLzVWMXKSbOYiBwSTEIqFbfAwdnpOzV7M4";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGalleryWithPhoto = async (photo, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&per_page=20&query=${photo}&page=${page}`,
    { signal }
  );
  return {
    photos: response.data.results,
    totalPages: response.data.total_pages,
  };
};
