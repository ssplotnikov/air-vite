import React from 'react';
import { useForm } from 'react-hook-form';

export const Price: React.FC = () => {
  return (
    <div className='navbar__price'>
      <div className='tag'>Цена</div>
      <div className='navbar__price-container'>
        <div className='navbar__price-text'>
          <div>От</div>
          <input type='text' placeholder='0' />
        </div>
        <div className='navbar__price-text'>
          <div>До</div>
          <input type='text' placeholder='10000' />
        </div>
      </div>
    </div>
  );
};
