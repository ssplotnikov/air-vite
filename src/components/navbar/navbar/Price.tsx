import React from 'react'

// export interface PriceProps {
//   minPrice: () => void
//   maxPrice: () => void
// }

export const Price: React.FC<any> = ({ minPrice, maxPrice }) => {
  // useEffect(() => {
  //   if (minPrice.value && minPrice.value >= maxPrice.value) {
  //     maxPrice.setValue(minPrice.value + 1)
  //   }
  // }, [minPrice.value, maxPrice.value])
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
