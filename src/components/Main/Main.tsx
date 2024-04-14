import React from 'react';
import './Main.scss';
import Promo from '../Promo/Promo';
import Features from '../Features/Features';
import Info from '../Info/Info';

export default function Main() {
  return (
    <main className='main'>
        <Promo />
        <Features />
        <Info />
    </main>
  )
}
