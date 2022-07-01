<<<<<<< HEAD
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

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
=======
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

export const FlightsAPI = {
  async fetchAll() {
    const response = await axios.get(`${BASE_URL}flights?_page=1&_limit=1`);
    return response.data;
  },
  async fetchBestPrices() {
    const response = await axios.get(`${BASE_URL}bestPrices`);
    return response.data;
  },
};
>>>>>>> f1adbe04d3e95c8b38ac7259fecacec358058d6a
