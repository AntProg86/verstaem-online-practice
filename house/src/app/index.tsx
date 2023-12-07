import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import LocalizedStrings from './localization';
import { Link, Route, Routes } from 'react-router-dom';
import './reset.scss';

import './styles.scss';
import {Logo, Cart, F, P, Play} from '../assets/svg';
import {Star, Group, Pigeon,
  human_1, human_2, human_3} from '../assets/pictures';
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
          &#128386;
          {/* <img src={Diamond} alt="zxc" /> */}
          
        </section>
        
        <section className=''>

        </section>

        <section className='advertising'>
          <div className='advertising__container'>
            <div className='advertising__container__header'>
              <img src={Star} alt="Star" />
              <h3>{LocalizedStrings.new_coll}</h3>
            </div>
            <div className='advertising__container__content'>
              <p>{LocalizedStrings.advertising_p_1}</p>
              <p>{LocalizedStrings.advertising_p_2}</p>
              <button>
                {LocalizedStrings.familiarize}
              </button>
            </div>
          </div>
        </section>

        <section className='our_team'>
          <div className='our-team_1__col-1'>
            <img className='Group_IMG' src={Group} alt="Group" />
          </div>
          <div className='our-team_1__col_2'>
            <div className='our_team__desc'>
              <h5>{LocalizedStrings.our_team}</h5>
              <p>{LocalizedStrings.our_team_p_1}</p>
              <div>
                <img src={human_1} alt="human_1" />
                <img src={human_2} alt="human_2" />
                <img src={human_3} alt="human_3" />
              </div>
            </div>
            
          </div>
        </section>

        <footer>
          <div className='footer__container'>
            <div className='footer__container__col-1'>
              <Logo/>
              <p>+7 (999) 543-54-54</p>
              <p>{LocalizedStrings.workshop}</p>
            </div>
            <div className='footer__container__col-2'>
              <div>
                <p>{LocalizedStrings.Reproductions}</p>
                <p>{LocalizedStrings.france}</p>
                <p>{LocalizedStrings.germany}</p>
                <p>{LocalizedStrings.england}</p>
              </div>
              <div>
                <p>{LocalizedStrings.new_items}</p>
                <p>2021</p>
                <p>2020</p>
              </div>
              <div>
                <p>{LocalizedStrings._about}</p>
                <p>{LocalizedStrings.artists}</p>
                <p>{LocalizedStrings.managers}</p>
              </div>

            </div>
            <div className='footer__container__col-3'>
              <div>
                <F/>
                <P/>
                <Play/>
              </div>
              <div>
                <p>{LocalizedStrings.ink_house}&reg;</p>
                <p>{LocalizedStrings.all_rights_reserved}</p>
              </div>
            </div>

          </div>
        </footer>
        
      </main>
    </>
  );
};
    
export default React.memo(Application);