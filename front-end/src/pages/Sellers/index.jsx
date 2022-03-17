import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Header from '../../components/Header';
import { getAllSalesFromUser } from '../../fetchs';
import * as S from './styles';

function SellerOrders() {
  const [pedidos, setPedidos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) history.push('/login');

    const fetchSeller = async () => {
      const listaDePedidos = await getAllSalesFromUser();
      if (listaDePedidos) {
        setPedidos(listaDePedidos);
      }
    };
    fetchSeller();

    const newSocket = io('http://localhost:3001');

    newSocket.on('connect', () => console.log('socket connected'));
    newSocket.on('statusUpdated', async () => fetchSeller());
    return () => newSocket.close();
  }, [history]);

  const maxLength = 5;

  return (
    <S.OrdersSellerPage>
      { pedidos.length && pedidos.map((order) => (
        <S.OrderCard to={ `/seller/orders/${order.id}` } key={ order.id }>
          <S.OrderCardHeader>
            <div>
              <h5>{ `Vendido por: ${order.seller.name}` }</h5>
              <span data-testid={ `seller_orders__element-order-date-${order.id}` }>
                { moment(order.saleDate).locale('pt-br').format('lll') }
              </span>
            </div>
            <button
              type="button"
              onClick={ () => history.push(`/seller/orders/${order.id}`) }
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
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
            >
              <span>Status</span>
              <span>{ order.status }</span>
            </div>

            <div data-testid={ `seller_orders__element-card-price-${order.id}` }>
              <span>Valor total</span>
              <span>
                { Number(order.totalPrice)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
              </span>
            </div>
          </S.OrderCardFooter>
        </S.OrderCard>
      ))}
    </S.OrdersSellerPage>
  );
}

export default SellerOrders;
