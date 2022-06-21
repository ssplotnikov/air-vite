import { useState, useMemo } from 'react';
import { shallowEqual } from 'react-redux';

export const useFilterFlight = () => {
  const [flight, setFlight] = useState([]);

  const loadFlights = useMemo(() => {
    let prevFilters;
    return async (filters) => {
      if (shallowEqual(filters, prevFilters)) {
        return;
      }
      prevFilters = filters;
      const data = await API.loadFlights(filters);
      setFlight(data);
    };
  }, []);
  return {
    flight,
    loadFlights,
  };
};
