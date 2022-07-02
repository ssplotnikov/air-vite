import React from 'react';

export const Sort: React.FC = () => {
  return (
    <div className='navbar__sort'>
      <div className='tag'>Сортировка</div>
      <div className='navbar__sort-container'>
        <div className='navbar__sort-radio'>
          <input type='radio' name='sort' />
          <div> - по возрастанию цены</div>
        </div>
        <div className='navbar__sort-radio'>
          <input type='radio' name='sort' />
          <div> - по убыванию цены</div>
        </div>
        <div className='navbar__sort-radio'>
          <input type='radio' name='sort' />
          <div> - по времени в пути</div>
        </div>
      </div>
    </div>
  );
};
