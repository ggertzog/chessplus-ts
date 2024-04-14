import React from 'react';
import './Features.scss';
import tournire from '../../images/tournire.svg';
import friends from '../../images/friends.svg';
import analize from '../../images/analize.svg';

export default function Features() {
  return (
    <section className='features'>
        <div className='features__container'>
            <div className='features__box'>
                <img className='features__image' src={friends} alt='иконка' />
                <p className='features__text'>Найди новых друзей!</p>
            </div>
            <div className='features__box'>
                <img className='features__image' src={analize} alt='иконка' />
                <p className='features__text'>Разбирай партии</p>
            </div>
            <div className='features__box'>
                <img className='features__image' src={tournire} alt='иконка' />
                <p className='features__text'>Учавствуй <br/>в турнирах</p>
            </div>
        </div>
    </section>
  )
}
