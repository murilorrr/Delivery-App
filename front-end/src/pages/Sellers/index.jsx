import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllSalesFromUser } from '../../fetchs';

function SellerOrders() {
  const [name, setName] = useState('');
  const [pedidos, setPedidos] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) history.push('/login');
    else setName(user.name);

    const fetchSeller = async () => {
      const listaDePedidos = await getAllSalesFromUser();
      if (listaDePedidos) {
        setPedidos(listaDePedidos);
      }
    };
    fetchSeller();
  }, [pedidos, history]);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div>
      <header>
        <nav>
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </span>
          <Link
            to="/"
            onClick={ logOut }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Link>
        </nav>
      </header>
      <div>
        { pedidos.map((cardItem, index) => (
          <Link
            key={ index }
            to={ `/seller/orders/${cardItem.id}` }
          >
            <ul>
              <li
                data-testid = {
                  `seller_orders__element-order-id-${cardItem.id}`
                }
              >
                { cardItem.id }
              </li>
              <li
                data-testid = {
                  `seller_orders__element-delivery-status-${cardItem.id}`
                }
              >
                { cardItem.status }
              </li>
              <li
                data-testid = {
                  `seller_orders__element-order-date-${cardItem.id}`
                }
              >
                { cardItem.saleDate }
              </li>
              <li
                data-testid = {
                  `seller_orders__element-card-price-${cardItem.id}`
                }
              >
                {
                  Number(cardItem.totalPrice)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              </li>
              <li
                data-testid = {
                  `seller_orders__element-card-address-${cardItem.id}`
                }
              >
                { `${cardItem.deliveryAddress}``${cardItem.deliveryNumber}` }
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SellerOrders;
