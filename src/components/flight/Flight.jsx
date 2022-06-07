import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Flight.scss';
import { FlightList } from './flight/FlightList';
import { selectAllFlights } from './../../store/flight/flightSlice';
import { fetchAllFlights } from './../../store/flight/flightSlice';

export const Flight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFlights());
  }, [dispatch]);

  const flightsAll = useSelector(selectAllFlights).flat();
  const loading = useSelector((state) => state.flight.loading);
  const getDate = (date) => new Date(date).toUTCString();
  let arrivalDate = getDate(
    flightsAll[0]?.flight?.legs[0].segments[0].arrivalDate,
  );
  let departureDate = getDate(
    flightsAll[0]?.flight?.legs[0].segments[0].departureDate,
  );
  // Работа с датами, посчитать время полета!
  if (loading) return <div>Loading...</div>;
  return (
    <div className='flight'>
      <div className='flight__carrier'>
        <div className='flight__carrier-id'>AF</div>
        <div className='flight__carrier-price'>
          <div className=''>21000 ₽</div>
          <div className='flight__carrier-price-person'>
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
      <div className='flight__list'>
        {flightsAll.map((flight, i) => (
          <FlightList
            key={i}
            flight={flight}
            arrivalDate={arrivalDate}
            departureDate={departureDate}
          />
        ))}
      </div>
      <div className='flight__select'>ВЫБРАТЬ</div>
    </div>
  );
};
