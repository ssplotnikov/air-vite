import React from 'react';

export const Filter: React.FC = () => {
  return (
    <div className='navbar__filter'>
      <div className='tag'>Фильтрация</div>
      <div className='navbar__filter-container'>
        <div className='navbar__filter-checkbox'>
          <input type='checkbox' />
          <div> - 1 пересадка</div>
        </div>
        <div className='navbar__filter-checkbox'>
          <input type='checkbox' />
          <div> - без пересадки</div>
        </div>
      </div>
    </div>
  );
};
