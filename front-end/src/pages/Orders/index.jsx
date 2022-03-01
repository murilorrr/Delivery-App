import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import getAllSales from '../../fetchs/saleEndpoints/getAllSales';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getSalesAsync = async () => {
      const result = await getAllSales();
      setOrders(result);
      console.log('orders', result);
    };

    getSalesAsync();
  }, []);

  const orderIdLength = 4;

  return (
    <>
      <Header />
      <main>
        {
          orders && orders.map((order) => (
            <Link to={`/customer/orders/${order.id}`} key={ order.id }>
              <span data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { `Pedido ${String(order.id).padStart(orderIdLength, '0')}` }
              </span>
              <span
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              >
                { order.status }
              </span>
              <span data-testid={ `customer_orders__element-order-date-${order.id}` }>
                { new Date(order.saleDate).toLocaleDateString({ locales: 'pt-BR' }) }
              </span>
            </Link>
          ))
        }
      </main>
    </>
  );
}

export default Orders;
