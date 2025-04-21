import axios from "axios";

const apiKey = "Ud4YJgNphxLzVWMXKSbOYiBwSTEIqFbfAwdnpOzV7M4";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchGalleryWithPhoto = async (photo, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&per_page=5&query=${photo}&page=${page}`
    // { signal }
  );
  return response.data.results;
};
