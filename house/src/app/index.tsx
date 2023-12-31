import React, { useEffect, useContext, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import LocalizedStrings from './localization';
import { Link, Route, Routes } from 'react-router-dom';
import './reset.scss';

import './styles.scss';
import {Logo, Cart, F, P, Play} from '../assets/svg';
import {Star, Group, Pigeon,
  human_1, human_2, human_3} from '../assets/pictures';

import CartArt from '../components/cart-art';
import { painting, Country } from '../types/painting';

import {getPaintingsByCountry} from '../data/paintings';

//import ASD from '../assets/Star.png'

type State = {
  paintings : Array<painting>
};

const initState = {
  paintings: getPaintingsByCountry(Country.FRANCE),
};

type Props = {

};

const Application: React.FunctionComponent<Props> = () => {

  const [state, changeState] = useState<State>(initState);
  
  //const Diamond = require('../assets/gallery/zxc.jpg');
  //const Logo = require('../assets/logo.svg');
  //const asd = getPaintingsByCountry(Country.FRANCE);
  
  return (
    <>
      <header>
        <section className='top-nav'>
          <div className='logo'>
            <Logo/>
          </div>
          <div>
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
            <ul className="menu">
              <li><a href="#">{LocalizedStrings.reproductions}</a></li>
              <li><a href="#">{LocalizedStrings.new_items}</a></li>
              <li><a href="#">{LocalizedStrings._about}</a></li>
              <li><Cart/></li>
            </ul>
          </div>
        </section>
      </header>
      
      <main>
        <section className='replica'>
          <figure>
            <img src={Pigeon} alt="Pigeon" />
          </figure>
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
          {state.paintings.map((p)=>{
            return(
              <CartArt
                artistName={p.artistName}
                country={p.country}
                currency={p.currency}
                description={p.description}
                price={p.price}
                title={p.title}
                imgSrc={p.imgSrc}
              />
            )
          })}
          
          {/* carts
          &#128386; */}
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
              <span>+7 (999) 543-54-54</span>
              <ul>
                <li>{LocalizedStrings.workshop}</li>
              </ul>
            </div>
            <div className='footer__container__col-2'>
              <div>
                <p>{LocalizedStrings.Reproductions}</p>
                <ul>
                  <li>{LocalizedStrings.france}</li>
                  <li>{LocalizedStrings.germany}</li>
                  <li>{LocalizedStrings.england}</li>
                </ul>
              </div>
              <div>
                <p>{LocalizedStrings.new_items}</p>
                <ul>
                  <li>2021</li>
                  <li>2020</li>
                </ul>
              </div>
              <div>
                <p>{LocalizedStrings._about}</p>
                <ul>
                  <li>{LocalizedStrings.artists}</li>
                  <li>{LocalizedStrings.managers}</li>
                </ul>
              </div>

            </div>
            <div className='footer__container__col-3'>
              <div>
                <F/>
                <P/>
                <Play/>
              </div>
              <ul>
                <li>{LocalizedStrings.ink_house}&reg;</li>
                <li>{LocalizedStrings.all_rights_reserved}</li>
              </ul>
            </div>

          </div>
        </footer>
        
      </main>
    </>
  );
};
    
export default React.memo(Application);