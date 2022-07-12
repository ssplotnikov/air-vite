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
  async fetchFilter(page = 1,limit = 10, minPrice = 0, maxPrice, airline, sortOrderPrice  ) {
    const response = await axios.get(`${BASE_URL}flights?page=${page}&limit=${limit}&flight.carrier.caption=${airline}&flight.price.total.amount_gte=${minPrice}&flight.price.total.amount_lte=${maxPrice}&_sort=flight.price.total.amount&_order=${sortOrderPrice}`)
    return response;
  }
};
