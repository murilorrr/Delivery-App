import React from 'react';
import useCart from '../../hooks/useCart';
import * as S from './styles';
// import TableCheckout from './styles';

function Table() {
  const { cart, cartTotal, updateCart } = useCart();

  return (
    <S.CheckoutPage>
      <S.TextHeader>Finalizar Pedido</S.TextHeader>
      <S.TableCheckout>
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
                <S.button
                  type="button"
                  onClick={ () => updateCart(cartItem, 0) }
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover
                </S.button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.TableCheckout>
      <div data-testid="customer_checkout__element-order-total-price">
        {
          `Total: ${Number(cartTotal)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }
      </div>
    </S.CheckoutPage>
  );
}

export default Table;
