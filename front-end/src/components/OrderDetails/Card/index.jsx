import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function OrderDetailsCard({ product }) {
  const { id, name, url_image: urlImage, price, SalesProduct } = product;
  console.log(product);

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
          <span>{ SalesProduct.quantity }</span>
          <span>x</span>
          <span data-testid={ `customer_products__element-card-price-${id}` }>
            { Number(price)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </div>

        <S.Options>
          <div>
            { (Number(price) * SalesProduct.quantity)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </div>
        </S.Options>
      </S.Info>
    </S.CardProduct>
  );
}

OrderDetailsCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default OrderDetailsCard;
