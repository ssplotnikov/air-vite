import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'

import { Avia, Filter, Price, Sort } from './navbar/index'

import './navbar.scss'
import { useGetFlightByCaptionQuery } from '../../services/flightServices'

const NavBar: React.FC = () => {
  const { data, error, isLoading } = useGetFlightByCaptionQuery('KLM')
  console.log('RTKdata:', data)
  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Filter />
        <Price />
        <Avia />
        <div className='navbar__form-btn'>Search</div>
      </div>
    </form>
  )
}

export default NavBar
