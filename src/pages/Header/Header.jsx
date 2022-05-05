import React from 'react';
import { NavBar } from '../../components/navbar/navbar';
//scss
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <NavBar />
    </header>
  );
};
