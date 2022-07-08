import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { fetchBestPrices } from '../../store/flight/actionsFlight'

import { Avia, Filter, Price, Sort } from './navbar/index'

import './navbar.scss'
import Basic from './form'

const NavBar: React.FC = () => {
  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Filter />
        <Price />
        <Avia />
        <Basic />
        <div className='navbar__form-btn'>Search</div>
      </div>
    </form>
  )
}

export default NavBar
