import React from 'react'

export const Price: React.FC<any> = ({ minPrice, maxPrice }) => {
  return (
    <div className='navbar__price'>
      <div className='tag'>Цена</div>
      <div className='navbar__price-container'>
        <div className='navbar__price-text'>
          <div>От</div>
          <input type='text' placeholder='0' value={minPrice.value} onChange={minPrice.onChange} />
        </div>
        <div className='navbar__price-text'>
          <div>До</div>
          <input
            type='text'
            placeholder='10000'
            value={maxPrice.value}
            onChange={maxPrice.onChange}
          />
        </div>
      </div>
    </div>
  )
}
