import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBestPrices } from '../../store/flight/actionsFlight';

<<<<<<< HEAD
import { Avia, Filter, Price, Sort } from './navbar/index';
=======
import useInput from '../../hooks/useInput';
import { getBestPrices } from '../../store/bestPrices/selectorBestPrice';
>>>>>>> 09dc2615ce2e1d698cf81d8a040621127b0d29ad

import './navbar.scss';

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
<<<<<<< HEAD

  useEffect(() => {
    dispatch(fetchBestPrices());
  }, []);

  const data = useAppSelector((state) => state.bestPrices.data);
  console.log(data);

  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Filter />
        <Price />
        <Avia />
      </div>
    </form>
  );
};
=======
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
>>>>>>> 09dc2615ce2e1d698cf81d8a040621127b0d29ad


export default NavBar;
