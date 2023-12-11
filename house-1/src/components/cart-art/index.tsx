import React, { useEffect, useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import LocalizedStrings from '../../app/localization';
import { painting, Country } from '#src/types/painting';

type Props = {

} & painting;

const CartArt: React.FunctionComponent<Props> = ({
  imgSrc,
  artistName,
  title,
  description,
  price,
  currency}) => {

  return (
    <>
      <div className='cart__container'>

        <figure>
          <img src={imgSrc} alt={title} />
          <figcaption>
            <p className='cart__container__artist'>
              {artistName}
            </p>
            <p className='cart__container__painting_title'>
              {title}
            </p>
            <p className='cart__container__painting_description'>
              {description}
            </p>
            <p className='cart__container__painting_price'>
              {price}&nbsp;{currency}
            </p>

          </figcaption>
        </figure>
        

        
        <button>
          {LocalizedStrings.add_to_cart}
        </button>
      </div>
    </>
  );
};
    
export default React.memo(CartArt);