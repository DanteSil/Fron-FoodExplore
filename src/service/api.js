// Pre-config for API access
import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-rocketnotes2097.onrender.com'
});