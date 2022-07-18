import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'

import { useGetFlightByCaptionQuery } from '../../services/flightServices'
import { Form, Sort } from './navbar/index'

import './navbar.scss'

const NavBar: React.FC = () => {
  const filters = useAppSelector((state) => state.filter.filters)
  console.log(filters)

  const { data, error, isLoading } = useGetFlightByCaptionQuery(filters)
  console.log('RTKdata:', data)

  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Form />
      </div>
    </form>
  )
}

export default NavBar
