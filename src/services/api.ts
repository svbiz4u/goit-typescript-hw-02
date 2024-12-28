import axios from "axios";


axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "4RGRvElklKE4T0zcQ8p3_07947a04ZneOpzSl5h3PjM",
      query,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return response.data;
};