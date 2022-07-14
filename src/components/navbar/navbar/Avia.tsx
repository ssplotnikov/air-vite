import React from 'react'
import { Caption } from '../../../types/flightsTypes'

export const Avia: React.FC = () => {
  return (
    <div className='navbar__air'>
      <div className='tag'>Авиакомпании</div>
      <div className='navbar__air-container'>
        {Object.keys(Caption).map((v, i) => (
          <div className='navbar__air-checkbox' key={i}>
            <input type='checkbox' value={v} />
            <div>{v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
