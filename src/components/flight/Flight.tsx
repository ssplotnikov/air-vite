import React from 'react'
import { useAppSelector } from '../../hooks/useRedux'
import { useGetFlightByCaptionQuery } from '../../services/flightServices'
import './Flight.scss'
import { FlightList } from './flight/FlightList'

const Flight: React.FC = () => {
  const filters = useAppSelector((state) => state.filter.filters)

  const { data, error, isLoading } = useGetFlightByCaptionQuery(filters)
  console.log(data)

  if (error) return <div>An error has occurred!</div>

  if (isLoading) return <div>..Loading</div>
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
        {data.map((flight: any, i: React.Key | null | undefined) => (
          <FlightList key={i} flight={flight} />
        ))}
      </div>
      {/* <div className='flight__select'>ВЫБРАТЬ</div> */}
    </div>
  )
}

export default Flight
