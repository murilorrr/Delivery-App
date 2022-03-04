import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllSeller, createSale } from '../../fetchs';
import useCart from '../../hooks/useCart';
import Header from '../../components/Header';

function Checkout() {
  const { cart, cartTotal, updateCart } = useCart();

  const [vendedores, setVendedores] = useState([]);
  const [currSeller, setCurrSeller] = useState(2);
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();

  useEffect(() => {
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

    const cartItens = cart.map(({ id, quantity }) => ({ id, quantity }));

    const sale = await createSale({
      sellerId: currSeller,
      totalPrice: cartTotal,
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      cart: cartItens,
    });

    history.push(`/customer/orders/${sale.id}`);
  };

  return (
    <div>
      <Header />
      <table>
        <caption>Finalizar Pedido</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
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
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {
                  Number(cartItem.price)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {
                  (Number(cartItem.price) * Number(cartItem.quantity))
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
              </td>
              <td>
                <button
                  type="button"
                  onClick={ () => updateCart(cartItem, 0) }
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td data-testid="customer_checkout__element-order-total-price">
              {
                `Total: ${Number(cartTotal)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
              }
            </td>
          </tr>
        </tfoot>
      </table>

      <form onSubmit={ submitOrder }>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="vendedores">
          P.Vendedoresa Responsável

          {
            vendedores.length && (
              <select
                id="vendedores"
                data-testid="customer_checkout__select-seller"
                defaultValue={ 2 }
                onChange={ ({ target }) => setCurrSeller(Number(target.value)) }
              >
                {vendedores.map((vendedor, index) => (
                  <option
                    key={ index }
                    value={ vendedor.id }
                  >
                    { vendedor.name }
                  </option>
                ))}
              </select>
            )
          }

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
