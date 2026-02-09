import axios from "axios";
import { applyInterceptors } from "../axios";

const dummyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DUMMY_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

applyInterceptors(dummyApi);

export default dummyApi;