import React, { useState } from 'react';
import './navbar.scss';

export const NavBar = () => {
<<<<<<< HEAD
  const changePrice = (e) => {
    // проверка на числа
    if (e.target.value) setPrice(e.target.value);
  };
=======
  const [maxPrice, setMaxPrice] = useState();
  const changeMaxPrice = (e) => {
    let reg = /[0-9]/gm;
    console.log(reg.test(e.target.value));
    if (reg.test(e.target.value) === true && e.target.value)
      setMaxPrice(e.target.value);
    console.log(maxPrice);
  };

>>>>>>> 968fca2bafc05db818cda0611d9133b8db75b610
  return (
    <div className='navbar'>
      <div className='navbar__sort'>
        <form>
          <div className='tag'>Сортировка</div>
          <div className='navbar__sort-container'>
            <div className='navbar__sort-radio'>
<<<<<<< HEAD
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
=======
              {/* Переделать теги для сортировки */}
              <input type='radio' id='up' name='sort' value='' />
              <label for='up'> - по возрастанию цены</label>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' id='down' name='sort' value='' />
              <label for='down'> - по убыванию цены</label>
            </div>
            <div className='navbar__sort-radio'>
              <input type='radio' id='time' name='sort' value='' />
              <label for='time'> - по времени в пути</label>
>>>>>>> 968fca2bafc05db818cda0611d9133b8db75b610
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
<<<<<<< HEAD
              <input type='text' defaultValue='10000' />
=======
              <input type='text' value={maxPrice} onChange={changeMaxPrice} />
>>>>>>> 968fca2bafc05db818cda0611d9133b8db75b610
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
