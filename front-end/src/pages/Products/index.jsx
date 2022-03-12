import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import ProductsCard from '../../components/Products/Card';
import getAllProducts from '../../fetchs/productsEndpoints/getAllProducts';
import useCart from '../../hooks/useCart';

import * as S from './styles';

function Products() {
  const { cartTotal } = useCart();
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    fetchData();
  }, []);

  return (
    <S.ProductsPage>
      <Header />
      <S.Main>
        {
          products && products.map((product) => (
            <ProductsCard key={ product.id } product={ product } />
          ))
        }
      </S.Main>
      <S.ButtonGoToCart
        onClick={ () => history.push('/customer/checkout') }
        data-testid="customer_products__button-cart"
        disabled={ !cartTotal }
      >
        <FontAwesomeIcon icon={ faCartShopping } />
        { ' ' }
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {
            cartTotal
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }
        </span>
      </S.ButtonGoToCart>
    </S.ProductsPage>
  );
}

export default Products;
