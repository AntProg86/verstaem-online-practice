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

type State = {
  paintings : Array<painting>
};

const initState = {
  paintings: getPaintingsByCountry(Country.FRANCE),
};

type Props = {

}

const Application: React.FunctionComponent<Props> = () => {

  const [state, changeState] = useState<State>(initState);

  return (
    <>
      <header>
        <section className='top-nav'>
          <div className='logo'>
            <Logo/>
          </div>
          <div className='top-nav__col-2'>
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'></div>
            </label>
            <ul className="menu">
              <li><a href="#">{LocalizedStrings.reproductions}</a></li>
              <li><a href="#">{LocalizedStrings.new_items}</a></li>
              <li><a href="#">{LocalizedStrings._about}</a></li>
            </ul>
            <Cart/>
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
            <button className='replica__btn'>
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
          {/* {state.paintings.map((p)=>{
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
          })} */}
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
              <div>
                <button>
                  {LocalizedStrings.familiarize}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='our-team'>
        <div className='our-team_1__col-1'>
            <img src={Group} alt="Group" />
          </div>
          <div className='our-team_1__col_2'>
            <div className='our-team__desc'>
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
          footer
        </footer>
      </main>
    </>
  );
};
    
export default React.memo(Application);