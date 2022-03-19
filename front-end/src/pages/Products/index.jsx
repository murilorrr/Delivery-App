import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
import ProductsCard from '../../components/Products/Card';
import getAllProducts from '../../fetchs/productsEndpoints/getAllProducts';
import * as S from './styles';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    fetchData();
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <S.Main>
      {
        products.length ? products.map((product) => (
          <ProductsCard key={ product.id } product={ product } />
        )) : (<span>Carregando produtos...</span>)
      }
    </S.Main>
  );
}

export default Products;
