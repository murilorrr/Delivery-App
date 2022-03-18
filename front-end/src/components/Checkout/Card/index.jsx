import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useCart from '../../../hooks/useCart';

import * as S from './styles';

function CheckoutCard({ product }) {
  const { id, name, url_image: urlImage, price, quantity: cartQuantity } = product;
  const [quantity, setQuantity] = useState(cartQuantity);
  const { updateCart } = useCart();

  const removeQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 0) setQuantity(newQuantity);
    updateCart(product, newQuantity);
  };

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
        <h5 data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </h5>

        <div>
          <span>{ cartQuantity }</span>
          <span>x</span>
          <span data-testid={ `customer_products__element-card-price-${id}` }>
            { Number(price)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </div>

        <S.Options>
          <div>
            { Number(price * cartQuantity)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </div>

          <div>
            <button
              type="button"
              data-testid={ `customer_products__button-card-remove-item-${id}` }
              onClick={ removeQuantity }
            >
              -
            </button>
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

CheckoutCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default CheckoutCard;
