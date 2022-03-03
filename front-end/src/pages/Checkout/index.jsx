import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSeller, createSale } from '../../fetchs';
import useCart from '../../hooks/useCart';
import Header from '../../components/Header';

function Checkout() {
  const { cart, cartTotal, updateCart } = useCart();

  const [vendedores, setVendedores] = useState('');
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log('useEffect !!!!');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) history.push('/login');

    const fetchSeller = async () => {
      const seller = await getAllSeller();
      if (seller) {
        setVendedores(seller);
      }
    };

    fetchSeller();
  }, [cart, history]);

  const submitOrder = async (event) => {
    event.preventDefault();

    const { vendedor } = event.target;
    const cartItens = cart.map(({ product, quantity }) => {
      const { id } = product;
      return { id, quantity };
    });

    const sale = await createSale({
      sellerId: vendedor.id,
      totalPrice: cartTotal,
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      cart: cartItens });
    history.push(`/customer/orders/:${sale.id}`);
  };

  const removeItem = async (event) => {
    const { product } = event.target;
    updateCart(product, 0);
  };

  return (
    <div>
      <Header />
      <table>
        <caption>Finalizar Pedido</caption>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        {cart.map((cartItem, index) => (
          <tr key={ index }>
            <td>
              { cartItem.id }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { cartItem.name }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { cartItem.quantity }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              { cartItem.valor }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { cartItem.valor * cartItem.quantity }
            </td>
            <td>
              <button
                type="button"
                onClick={ removeItem }
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
        <div>{`Total: R$ ${cartTotal}`}</div>
      </table>

      <form onSubmit={ submitOrder }>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="vendedores">
          P.Vendedoresa Responsável
          <select
            id="vendedores"
            value={ vendedores }
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setVendedores(target.value) }
          >
            {vendedores.map((vendedor, index) => (
              <option key={ index } value={ vendedor }>{vendedor.name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input
            type="text"
            name="endereço"
            id="endereço"
            value={ endereço }
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setEndereço(target.value) }
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            type="number"
            name="numero"
            id="numero"
            value={ numero }
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setNumero(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ submitOrder }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default Checkout;
