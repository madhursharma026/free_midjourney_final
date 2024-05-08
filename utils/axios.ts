import axios from "axios";

axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosServiceInit = (router) => {
  axios.interceptors.response.use(null, error => {
    if (error?.response?.status === 401) {
      router.replace('/auth/signin')
      error.response.data.error = "Please sign in to access this resource.";
    }
    return Promise.reject(error)
  });
}

export default axios;
