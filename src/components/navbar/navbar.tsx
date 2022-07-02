import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBestPrices } from '../../store/flight/actionsFlight';

import { Avia, Filter, Price, Sort } from './navbar/index';

import './navbar.scss';

const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();

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

export default NavBar;
