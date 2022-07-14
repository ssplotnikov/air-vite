import React, { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import './Flight.scss'
// import { fetchAllFlights } from '../../store/flight/actionsFlight'
// import { fetchAllFilterFlights } from '../../store/filter/actionFilter'

const Flight: React.FC = () => {
  // const dispatch = useAppDispatch()
  // const data = useAppSelector((state) => state.flight.data)
  // const loading = useAppSelector((state) => state.flight.loading)
  // console.log('flight: ', data)

  // const filter = useAppSelector((state) => state.filter.data)
  // console.log(filter)

  // useEffect(() => {
  //   dispatch(fetchAllFlights())
  // }, [])

  // useEffect(() => {
  //   dispatch(fetchAllFilterFlights())
  // }, [])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

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
    </div>
    // <div className='flight__list'>
    //   {flightsAll.map((flight, i) => (
    //     <FlightList
    //       key={i}
    //       flight={flight}
    //       arrivalDate={arrivalDate}
    //       departureDate={departureDate}
    //     />
    //   ))}
    // </div>
    // <div className='flight__select'>ВЫБРАТЬ</div>
  )
}

export default Flight
