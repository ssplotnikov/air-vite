import React from 'react';
import './FlightList.scss';
export const FlightList = ({ flight, arrivalDate, departureDate }) => {
  return (
    <div className='flight__there'>
      <div className='flight__there-airline'>
        {flight.flight.legs[0].segments[0].arrivalAirport.caption}{' '}
        {`(${flight.flight.legs[0].segments[0].arrivalAirport.uid})`} -{' '}
        {flight.flight.legs[0].segments[0].departureAirport.caption}{' '}
        {`(${flight.flight.legs[0].segments[0].departureAirport.uid})`}
      </div>
      <div className='flight__there-time'>
        <div className='flight__there-time'>{arrivalDate}</div>
        <div className='flight__there-time'>14ч 45мин</div>
        <div className='flight__there-time'>{departureDate}</div>
      </div>
      <fieldset className='flight__there-transfer'>
        <legend className='flight__there-transfer-value'>
          {flight.flight.legs[0].segments[0].stops} пересадок
        </legend>
      </fieldset>
      <div className='flight__there-company'>
        Рейс выполняет: {flight.flight.legs[0].segments[1].airline.caption}
      </div>
    </div>
  );
};
