import axios from "axios";

const BASE_URL = "http://localhost:3000/";

export const FlightsAPI = {
  async fetchAll() {
    const response = await axios.get(`${BASE_URL}flights?_page=1&_limit=10`);
    return response;
  },
  async fetchBestPrices() {
    const response = await axios.get(`${BASE_URL}bestPrices`);
    return response;
  },
};
