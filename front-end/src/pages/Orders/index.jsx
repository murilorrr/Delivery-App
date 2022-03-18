import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import moment from 'moment';
import 'moment/locale/pt-br';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Header from '../../components/Header';
import getAllSales from '../../fetchs/saleEndpoints/getAllSales';

import * as S from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getSalesAsync = async () => {
      const result = await getAllSales();
      setOrders(result);
    };

    getSalesAsync();

    const newSocket = io('http://localhost:3001');

    newSocket.on('connect');
    newSocket.on('statusUpdated', async () => getSalesAsync());
    return () => {
      setOrders([]);
      newSocket.close();
    };
  }, []);

  const maxLength = 5;

  return (
    <S.Main>
      {
        orders.length > 0 && orders.map((order) => (
          <S.OrderCard to={ `/customer/orders/${order.id}` } key={ order.id }>
            <S.OrderCardHeader>
              <div>
                <h5>{ `Vendido por: ${order.seller.name}` }</h5>
                <span data-testid={ `customer_orders__element-order-date-${order.id}` }>
                  { moment(order.saleDate).locale('pt-br').format('lll') }
                </span>
              </div>
              <button
                type="button"
                onClick={ () => history.push(`/customer/orders/${order.id}`) }
              >
                <FontAwesomeIcon icon={ faAngleRight } />
              </button>
            </S.OrderCardHeader>

            <S.ProductContainer>
              {
                order.products
                  .slice(0, order.products.length > maxLength
                    ? maxLength
                    : order.products.length)
                  .map((product) => (
                    <S.Product
                      src={ product.url_image }
                      alt={ product.name }
                      key={ product.id }
                    />
                  ))
              }
              { order.products.length > maxLength && (
                <span>{ `+${order.products.length - maxLength}` }</span>)}
            </S.ProductContainer>

            <S.OrderCardFooter>
              <div
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              >
                <span>Status</span>
                <span>{ order.status }</span>
              </div>

              <div data-testid={ `customer_orders__element-card-price-${order.id}` }>
                <span>Valor total</span>
                <span>
                  { Number(order.totalPrice)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
                </span>
              </div>
            </S.OrderCardFooter>
          </S.OrderCard>
        ))
      }
    </S.Main>
  );
}

export default Orders;
