import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
// import Header from '../../components/Header';
// import OrderDetailsTable from '../../components/OrderDetailsSeller';
import getSaleById from '../../fetchs/saleEndpoints/getSaleById';
import * as S from './styles';
import OrderDetailsCard from '../../components/OrderDetails/Card';

const STATUS = 'seller_order_details__element-order-details-label-delivery-status';
// const DATE = 'seller_order_details__element-order-details-label-order-date';

function OrderDetailsSeller() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({
    id: 0,
    totalPrice: String(),
    deliveryAddress: String(),
    deliveryNumber: String(),
    saleDate: String(),
    status: String(),
    user: {
      id: Number(),
      name: String(),
      role: String(),
    },
    seller: {
      id: Number(),
      name: String(),
      role: String(),
    },
    products: [],
  });
  const [socket, setSocket] = useState({});

  const changeStatus = (status) => {
    socket.emit('updateStatus', { saleId: orderId, status });
  };

  useEffect(() => {
    const fetchData = async () => {
      const sales = await getSaleById(orderId);
      setOrder(sales);
    };
    fetchData();

    const newSocket = io(process.env.REACT_APP_API_URL || 'http://localhost:3001');

    newSocket.on('connect');
    newSocket.on('statusUpdated', ({ status }) => {
      setOrder((prev) => ({ ...prev, status }));
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [orderId]);

  const orderIdLength = 4;

  return (
    order.id && (
      <S.Main>
        <S.OrderDetailsHeader orderStatus={ order.status }>
          <h2
            data-testid={
              `customer_order_details__element-order-details-label-seller-name${''}`
            }
          >
            <span>Pedido feito por:</span>
            <span>{ order.user.name }</span>
          </h2>
          <span
            data-testid={
              `customer_order_details__element-order-details-label-order-date${''}`
            }
          >
            { `Realizado em ${moment(order.saleDate).locale('pt-br').format('lll')}` }
          </span>
          <button
            type="button"
            disabled={ !order.status.includes('Pendente') }
            onClick={ () => changeStatus('Preparando') }
            data-testid="seller_order_details__button-preparing-check"
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            disabled={ !order.status.includes('Preparando') }
            onClick={ () => changeStatus('Em Trânsito') }
            data-testid="seller_order_details__button-dispatch-check"
          >
            SAIU PARA ENTREGA
          </button>

          <h1
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            <span>
              { `Pedido nº ${String(order.id).padStart(orderIdLength, '0')}` }
            </span>
            <span
              data-testid={ STATUS }
            >
              { `Status: ${order.status}` }
            </span>
          </h1>
        </S.OrderDetailsHeader>

        <div>
          {
            order.products.length && order.products.map((product) => (
              <OrderDetailsCard key={ product.id } product={ product } />
            ))
          }
        </div>

        <S.Total data-testid="customer_order_details__element-order-total-price">
          <div>
            <span>Valor total:</span>
            <span>
              { Number(order.totalPrice)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </span>
          </div>
        </S.Total>
      </S.Main>
    )
  );
}

export default OrderDetailsSeller;
