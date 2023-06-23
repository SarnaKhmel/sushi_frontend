import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://sushiwithlove-1-h4703717.deta.app",
// });

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   return config;
// });

// export default instance;

// const instance = axios.create({
//   baseURL: "https://sushiwithlove-1-h4703717.deta.app",
// });

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   config.headers["Data-Key"] = "a0eXuHyF57qv_imhcZQwVeNKSffAd1UC8EszBSk9poCc3"; // Додайте рядок з ключем даних тут
//   return config;
// });

// export default instance;

const instance = axios.create({
  baseURL: "http://localhost:1234",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
