import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import LocalizedStrings from './localization';
import { Link, Route, Routes } from 'react-router-dom';
import './reset.scss';

import './styles.scss';
import {Logo, Cart} from '../assets/svg';
import {Star, Group, Pigeon} from '../assets/pictures';
//import CartArt from '#components/cart-art';

import CartArt from '../components/cart-art';
import { painting } from '#src/types/painting';

//import ASD from '../assets/Star.png'

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  //const Diamond = require('../assets/gallery/zxc.jpg');
  
  // const Logo = require('../assets/logo.svg');
  
  return (
    <>
      <header>
        <div>
          <Logo/>
          <nav>
            <a href="#">{LocalizedStrings.reproductions}</a>
            <a href="#">{LocalizedStrings.new_items}</a>
            <a href="#">{LocalizedStrings._about}</a>
            <Cart/>
          </nav>
        </div>
      </header>
      
      <main>
        <section className='replica'>
          <img src={Pigeon} alt="Pigeon" />
          <div>
            <h1>
              {LocalizedStrings.replica_paintings}&nbsp;
              <div>
                {LocalizedStrings.ink_house}
              </div>
            </h1>
            <p>{LocalizedStrings.paragraph_1}</p>
            <button className='primary_btn'>
              {LocalizedStrings.products}
            </button>
          </div>
        </section>

        <section className='reproductions'>
          <h2>{LocalizedStrings.reproductions}</h2>
          <div>

            <button>{LocalizedStrings.france}</button>
            <button>{LocalizedStrings.germany}</button>
            <button>{LocalizedStrings.england}</button>
          </div>
        </section>

        <section className='carts'>
          carts
          {/* <img src={Diamond} alt="zxc" /> */}
          
        </section>
        
        <section className='advertising'>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis ipsum animi saepe quasi architecto deleniti assumenda repellendus dolorum! Vero iste voluptatem dignissimos nemo dicta incidunt et, labore accusamus facere.
        </section>
        {/* <section className='advertising'>
          <div>
            <img src={Star} alt="Star" />
            <p>{LocalizedStrings.new_coll}</p>
          </div>

          <p>{LocalizedStrings.advertising_p_1}</p>
          <p>{LocalizedStrings.advertising_p_2}</p>
          <button>
            {LocalizedStrings.familiarize}
          </button>
        </section> */}

        <section className='our_team'>
          <img src={Group} alt="Group" />
          <div>
            <h3>{LocalizedStrings.our_team}</h3>
            <p>{LocalizedStrings.our_team_p_1}</p>
          </div>
        </section>
      </main>
    </>
  );
};
    
export default React.memo(Application);