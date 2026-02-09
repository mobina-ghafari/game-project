import toast from "react-hot-toast";
import { AxiosInstance } from "axios";

export const applyInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("API Error", error?.response || error);

      if (error.response) {
        const status = error.response.status;

        if (status >= 500) {
          toast.error("Server error! Please try again later.");
        } else if (status === 400) {
          toast.error(error.response.data?.message || "Bad request!");
        } else if (status === 404) {
          toast.error("Not found!");
        }
      } else {
        toast.error("Network error! Check your connection.");
      }

      return Promise.reject(error);
    }
  );
};
