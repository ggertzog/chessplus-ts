import React from 'react';
import './Promo.scss';
import logo from '../../images/logo.svg';
import horse from '../../images/horse.svg';

export default function Promo() {
  return (
    <section className='promo'>
        <div className='promo__container'>
            <div className='promo__about'>
                <h1 className='promo__title'>Играй в шахматы!</h1>
                <p className='promo__text'>Сайт для игры в шахматы, обучения <br/>и просмотра партий</p>
                <div className='promo__box'>
                    <button className='promo__button promo__button_type_play'><img className='promo__button-image' src={horse} alt='лошадь'/>Начать Игру</button>
                    <button className='promo__button promo__button_type_register'>Регистрация</button>
                </div>
            </div>
            <img className='promo__logo' src={logo} alt='Логотип' />
        </div>
    </section>
  )
}
