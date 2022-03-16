import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useCart from '../../../hooks/useCart';

import * as S from './styles';

function ProductsCard({ product }) {
  const { id, name, url_image: urlImage, price } = product;
  const [quantity, setQuantity] = useState(0);
  const { updateCart } = useCart();

  // const removeQuantity = () => {
  //   const newQuantity = quantity - 1;
  //   if (newQuantity >= 0) setQuantity(newQuantity);
  //   updateCart(product, newQuantity);
  // };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  const handleChange = (newQuantity) => {
    if (newQuantity < 0) setQuantity(0);
    else setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

  return (
    <S.CardProduct>
      <S.Image
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <S.Info>
        <div>
          <span>{ 4.7 }</span>
          <FontAwesomeIcon icon={ faStar } />
        </div>

        <h5 data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </h5>

        <S.Options>
          <h6 data-testid={ `customer_products__element-card-price-${id}` }>
            { Number(price)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </h6>
          <div>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={ quantity }
              data-testid={ `customer_products__input-card-quantity-${id}` }
              onChange={ ({ target }) => handleChange(Number(target.value)) }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ addQuantity }
            >
              +
            </button>
          </div>
        </S.Options>

      </S.Info>
    </S.CardProduct>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductsCard;
