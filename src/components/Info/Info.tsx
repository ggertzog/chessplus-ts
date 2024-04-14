import React from 'react';
import './Info.scss';
import fide from '../../images/fide.png';

export default function Info() {
    return (
        <section className='info'>
            <div className='info__container'>
                <h2 className='info__title'>Статьи и материалы</h2>
                <div className='info__list'>
                    <div className='info__box'>
                        <img className='info__image' src={fide} alt='Иконка' />
                        <p className='info__text'>Обзор 5 тура турнира претендентов</p>
                    </div>
                    <div className='info__box'>
                        <img className='info__image' src={fide} alt='Иконка' />
                        <p className='info__text'>Обзор 5 тура турнира претендентов</p>
                    </div>
                    <div className='info__box'>
                        <img className='info__image' src={fide} alt='Иконка' />
                        <p className='info__text'>Обзор 5 тура турнира претендентов</p>
                    </div>
                    <div className='info__box'>
                        <img className='info__image' src={fide} alt='Иконка' />
                        <p className='info__text'>Обзор 5 тура турнира претендентов</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
