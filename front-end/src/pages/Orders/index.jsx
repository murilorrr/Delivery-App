import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import getAllSales from '../../fetchs/saleEndpoints/getAllSales';

import * as S from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getSalesAsync = async () => {
      const result = await getAllSales();
      setOrders(result);
    };

    getSalesAsync();
  }, []);

  const orderIdLength = 4;

  return (
    <>
      <Header />
      <S.Main>
        {
          orders.length && orders.map((order) => (
            <S.OrderCard to={ `/customer/orders/${order.id}` } key={ order.id }>
              <span data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { `Pedido ${String(order.id).padStart(orderIdLength, '0')}` }
              </span>
              <span
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              >
                { order.status }
              </span>
              <div>
                <span data-testid={ `customer_orders__element-order-date-${order.id}` }>
                  { new Date(order.saleDate).toLocaleDateString({ locales: 'pt-BR' }) }
                </span>
                <span data-testid={ `customer_orders__element-card-price-${order.id}` }>
                  { Number(order.totalPrice)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                </span>
              </div>
            </S.OrderCard>
          ))
        }
      </S.Main>
    </>
  );
}

export default Orders;
