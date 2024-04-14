import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className='header'>
        <div className='header__container'>
            <p className='header__link'>Вход</p>
            <p className='header__link'>Регистрация</p>
        </div>
    </header>
  )
}
