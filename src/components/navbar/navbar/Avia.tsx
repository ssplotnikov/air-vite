import React, { ChangeEvent, useState } from 'react'
import { Caption } from '../../../types/flightsTypes'
import { useAppDispatch } from '../../../hooks/useRedux'
import { setAirline, deleteAirline } from '../../../store/reducers/flitersSlice'

export const Avia: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setAirline(e.target.value))
    } else {
      dispatch(deleteAirline(e.target.value))
    }
  }
  return (
    <div className='navbar__air'>
      <div className='tag'>Авиакомпании</div>
      <div className='navbar__air-container'>
        {Object.keys(Caption).map((v, i) => (
          <div className='navbar__air-checkbox' key={i}>
            <input type='checkbox' value={v} onChange={handleChange} />
            <div>{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
