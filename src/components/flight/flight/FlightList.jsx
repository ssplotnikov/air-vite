import React from 'react'
import './FlightList.scss'
export const FlightList = ({ flight }) => {
  return (
    <div className='flight__there'>
      <div className='flight__there-airline'>
        {flight.flight.legs[0].segments[0].departureAirport.caption}{' '}
        {`(${flight.flight.legs[0].segments[0].departureAirport.uid})`} -{' '}
        {flight.flight.legs[0].segments[0].arrivalAirport.caption}{' '}
        {`(${flight.flight.legs[0].segments[0].arrivalAirport.uid})`}
      </div>
      <div className='flight__there-time'>
        <div className='flight__there-time'>{flight.flight.legs[0].segments[0].departureDate}</div>
        <div className='flight__there-time'>{flight.flight.legs[0].duration}</div>
        <div className='flight__there-time'>{flight.flight.legs[0].segments[0].arrivalDate}</div>
      </div>
      <fieldset className='flight__there-transfer'>
        <legend className='flight__there-transfer-value'>
          {flight.flight.legs[0].segments[0].stops} пересадок
        </legend>
      </fieldset>
      <div className='flight__there-company'>
        Рейс выполняет: {flight.flight.legs[0].segments[0].airline.caption}
      </div>
      <div className='flight_price'>Стоимость: {flight.flight.price.total.amount} рублей</div>
      {/* ======================= */}
      {/* <div className='flight__there-airline'>
        {flight.flight.legs[1].segments[1].departureAirport.caption}{' '}
        {`(${flight.flight.legs[1].segments[1].departureAirport.uid})`} -{' '}
        {`(${flight.flight.legs[1].segments[1].arrivalAirport.uid})`}
        {flight.flight.legs[1].segments[1].arrivalAirport.caption}{' '}
      </div> */}
      {/* <div className='flight__there-time'> */}
      {/* <div className='flight__there-time'>{flight.flight.legs[1].segments[1].departureDate}</div> */}
      {/* <div className='flight__there-time'>{flight.flight.legs[1].duration}</div> */}
      {/* <div className='flight__there-time'>{`${hours} часов ${data} минут`}</div> */}
      {/* <div className='flight__there-time'>{flight.flight.legs[1].segments[1].arrivalDate}</div> */}
      {/* </div> */}
      {/* <fieldset className='flight__there-transfer'>
        <legend className='flight__there-transfer-value'>
          {flight.flight.legs[1].segments[0].stops} пересадок
        </legend>
      </fieldset> */}
      {/* <div className='flight__there-company'>
        Рейс выполняет: {flight.flight.legs[1].segments[1].airline.caption}
      </div> */}
      <div className='break'></div>
    </div>
  )
}
