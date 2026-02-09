import axios from "axios";
import { applyInterceptors } from "../axios";

const rawgApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAWG_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

applyInterceptors(rawgApi);

export default rawgApi;
