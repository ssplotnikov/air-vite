import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Flight.scss';
import { selectAllFlights } from './../../store/flight/flightSlice';
import { fetchAllFlights } from './../../store/flight/flightSlice';
//
export const Flight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFlights());
  }, [dispatch]);

  const flightsAll = useSelector(selectAllFlights).flat();
  const loading = useSelector((state) => state.flight.loading);
  console.log(flightsAll);
  const getDate = (date) => new Date(date).toUTCString();
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
      <div className='flight__there'>
        <div className='flight__there-airline'>
          {flightsAll[0].flight.legs[0].segments[0].arrivalAirport.caption}{' '}
          {`(${flightsAll[0].flight.legs[0].segments[0].arrivalAirport.uid})`} -{' '}
          {flightsAll[0].flight.legs[0].segments[0].departureAirport.caption}{' '}
          {`(${flightsAll[0].flight.legs[0].segments[0].departureAirport.uid})`}
        </div>
        <div className='flight__there-time'>
          <div className='flight__there-time'>
            {getDate(flightsAll[0].flight.legs[0].segments[0].arrivalDate)}
          </div>
          <div className='flight__there-time'>14ч 45мин</div>
          <div className='flight__there-time'>
            {getDate(flightsAll[0].flight.legs[0].segments[0].departureDate)}
          </div>
        </div>
        <fieldset className='flight__there-transfer'>
          <legend className='flight__there-transfer-value'>1 пересадка</legend>
        </fieldset>
        <div className='flight__there-company'>
          Рейс выполняет: LOT Polish airlines
        </div>
      </div>
      <div className='flight__back'>
        <div className='flight__back-airline'>
          Москва, ШЕРЕМЕТЬЕВО SVO ЛОНДОН, Лондон, Хитроу LHR
        </div>
        <div className='flight__back-time'>
          <div className='flight__back-time'>20:40 16 авг. вт</div>
          <div className='flight__back-time'>14ч 45мин</div>
          <div className='flight__back-time'>17 авг. ср 09:25</div>
        </div>
        <fieldset className='flight__back-transfer'>
          <legend className='flight__back-transfer-value'>1 пересадка</legend>
        </fieldset>
        <div className='flight__back-company'>
          Рейс выполняет: LOT Polish airlines
        </div>
      </div>
      <div className='flight__select'>ВЫБРАТЬ</div>
    </div>
  );
};
