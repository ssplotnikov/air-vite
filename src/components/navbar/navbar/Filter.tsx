import React, { useState } from 'react'

export const Filter: React.FC = () => {
  const [checkedState, setCheckedState] = useState(new Array(2).fill(null))
  const handleOnCheck = (e) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === e ? !item : item))
    setCheckedState(updatedCheckedState)
  }
  return (
    <div className='navbar__filter'>
      <div className='tag'>Фильтрация</div>
      <div className='navbar__filter-container'>
        <div className='navbar__filter-checkbox'>
          <input type='checkbox' onChange={handleOnCheck} value='1' />
          <div> - 1 пересадка</div>
        </div>
        <div className='navbar__filter-checkbox'>
          <input type='checkbox' onChange={handleOnCheck} value='0' />
          <div> - без пересадки</div>
        </div>
      </div>
    </div>
  )
}
