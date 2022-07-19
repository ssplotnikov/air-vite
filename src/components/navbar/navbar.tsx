import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'

import { useGetFlightByCaptionQuery } from '../../services/flightServices'
import { Form, Sort } from './navbar/index'

import './navbar.scss'

const NavBar: React.FC = () => {
  let updateFilterList: any = {
    airline: [],
    minPrice: '',
    maxPrice: '',
    stops: [],
  }
  const filters = useAppSelector((state) => state.filter.filters)

  const { data, error, isLoading } = useGetFlightByCaptionQuery(filters)

  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Form updateFilterList={updateFilterList} />
      </div>
    </form>
  )
}

export default NavBar
