import axios from "axios";

const API_KEY = "Ud4YJgNphxLzVWMXKSbOYiBwSTEIqFbfAwdnpOzV7M4";

axios.defaults.baseURL =
  "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max?737919=Ud4YJgNphxLzVWMXKSbOYiBwSTEIqFbfAwdnpOzV7M4";

export const fetchGalleryWithPhoto = async (photo) => {
  const response = await axios.get(`/search?query=${photo}`);
  return response.data.hits;
};
