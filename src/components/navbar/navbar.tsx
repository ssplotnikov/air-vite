<<<<<<< HEAD:src/components/navbar/navbar.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBestPrices } from '../../store/flight/actionsFlight';

import useInput from '../../hooks/useInput';
import { getBestPrices } from '../../store/bestPrices/selectorBestPrice';

import './navbar.scss';

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getBestPrices);
  console.log('bestPrices:', data);

  // useEffect(() => {
  //   dispatch(fetchBestPrices());
  // }, []);

  return (
    <div className='navbar'>
      <div className='navbar__sort'>
        <form>
          <div className='tag'>Сортировка</div>
          <div className='navbar__sort-container'>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по возрастанию цены</div>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по убыванию цены</div>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по времени в пути</div>
            </div>
          </div>
        </form>
      </div>
      <div className='navbar__filter'>
        <form>
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
        </form>
      </div>
      <div className='navbar__price'>
        <FormPrice />
      </div>
      <div className='navbar__air'>
        <form>
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
        </form>
      </div>
    </div>

  );
};

const FormPrice: React.FC = () => {
  const [lowPrice, OnChangeLowPrice] = useInput('');
  const [highPrice, OnChangeHighPrice] = useInput('');

  return (
    <>
      <form>
        <div className='tag'>Цена</div>
        <div className='navbar__price-container'>
          <div className='navbar__price-text'>
            <div>От</div>
            <input type='text' pattern='[0-9]' value={lowPrice} onChange={OnChangeLowPrice} placeholder='0' />
          </div>
          <div className='navbar__price-text'>
            <div>До</div>
            <input type='text' pattern="[0-9]" value={highPrice} onChange={OnChangeHighPrice} placeholder='10000' />
          </div>
        </div>
      </form>

    </>
  )
}


export default NavBar;
=======
import React, { useState } from 'react';
import './navbar.scss';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__sort'>
        <form>
          <div className='tag'>Сортировка</div>
          <div className='navbar__sort-container'>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по возрастанию цены</div>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по убыванию цены</div>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' />
              <div> - по времени в пути</div>
            </div>
          </div>
        </form>
      </div>
      <div className='navbar__filter'>
        <form>
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
        </form>
      </div>
      <div className='navbar__price'>
        <form>
          <div className='tag'>Цена</div>
          <div className='navbar__price-container'>
            <div className='navbar__price-text'>
              <div>От</div>
              <input type='text' defaultValue='0' />
            </div>
            <div className='navbar__price-text'>
              <div>До</div>
              <input type='text' defaultValue='10000' />
            </div>
          </div>
        </form>
      </div>
      <div className='navbar__air'>
        <form>
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
        </form>
      </div>
    </div>
  );
};
>>>>>>> f1adbe04d3e95c8b38ac7259fecacec358058d6a:src/components/navbar/navbar.jsx
