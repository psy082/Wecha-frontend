import axios from "axios";

const api = axios.create({
  baseURL: "http://18.223.188.215:8000/",
  headers: {
    Authorization: localStorage.getItem("access_token"),
  },
});

export const movieApi = {
  showDetail: (id) => api.get(`film/${id}`),
};

export const reviewApi = {
  updateScore: (body) => api.post("user/review", body),
};
