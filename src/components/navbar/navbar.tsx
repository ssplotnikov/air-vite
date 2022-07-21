import React from 'react'

import { Form, Sort } from './navbar/index'

import './navbar.scss'

const NavBar: React.FC = () => {
  return (
    <form>
      <div className='navbar'>
        <Sort />
        <Form />
      </div>
    </form>
  )
}

export default NavBar
