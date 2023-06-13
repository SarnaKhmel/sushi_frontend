import axios from "axios";

const instance = axios.create({
  baseURL: "https://sushiwithlove-1-h4703717.deta.app",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://sushiwithlove-1-h4703717.deta.app",
// });

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   config.headers["Data-Key"] = "a0te8pfPxEWU_xSvQMYh2RWdYQodt7UTrjTcQ3SE8L94y"; // Додайте рядок з ключем даних тут
//   return config;
// });

// export default instance;
