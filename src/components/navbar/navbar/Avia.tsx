import React, { ChangeEvent } from 'react'
import { Caption } from '../../../types/flightsTypes'

export interface AviaProps {
  onChangeAvias: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Avia: React.FC<AviaProps> = ({ onChangeAvias }) => {
  return (
    <div className='navbar__air'>
      <div className='tag'>Авиакомпании</div>
      <div className='navbar__air-container'>
        {Object.values(Caption).map((v, i) => (
          <div className='navbar__air-checkbox' key={i}>
            <input type='checkbox' value={v} onChange={onChangeAvias} />
            <div>{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
