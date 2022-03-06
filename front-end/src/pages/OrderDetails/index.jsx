import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { io } from 'socket.io-client';
import Header from '../../components/Header';
import OrderDetailsTable from '../../components/OrderDetails/Table';
import getSaleById from '../../fetchs/saleEndpoints/getSaleById';

function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({
    id: Number(),
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

  const socket = io('http://localhost:3001');

  const changeStatus = () => {
    socket.emit('updateStatus', { saleId: orderId, status: 'Entregue' });
  };

  socket.on('statusUpdated', ({ status }) => setOrder((prev) => ({ ...prev, status })));

  useEffect(() => {
    const fetchData = async () => {
      const teste = await getSaleById(orderId);
      setOrder(teste);
    };
    fetchData();
  }, [orderId]);

  const orderIdLength = 4;

  return (
    <>
      <Header />
      <main>
        <div>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `Pedido ${String(order.id).padStart(orderIdLength, '0')}` }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { order.seller.name }
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(order.saleDate).format('DD/MM/YYYY') }
          </span>
          <span
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status${''}`
            }
          >
            { order.status }
          </span>
          <button
            type="button"
            disabled={ !order.status.includes('Em Trânsito') }
            onClick={ changeStatus }
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </button>
        </div>

        <OrderDetailsTable products={ order.products } />

        <div data-testid="customer_order_details__element-order-total-price">
          { Number(order.totalPrice)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
