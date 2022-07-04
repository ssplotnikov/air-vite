import React from 'react'

export const Avia: React.FC = () => {
  return (
    <div className='navbar__air'>
      <div className='tag'>Авиакомпании</div>
      <div className='navbar__air-container'>
        <div className='navbar__air-checkbox'>
          <div>
            air1
            <input type='checkbox' defaultValue='air1' />
          </div>
        </div>
        <div className='navbar__air-checkbox'>
          <input type='checkbox' />
          <div>air2</div>
        </div>
      </div>
    </div>
  )
}
