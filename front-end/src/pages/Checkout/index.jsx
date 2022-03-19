import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useCart from '../../hooks/useCart';
import { createSale, getAllSeller } from '../../fetchs';

// import Header from '../../components/Header';
// import FormsNewOrder from '../../components/forms/formNewOrder';
import CheckoutCard from '../../components/Checkout/Card';

import * as S from './styles';

function Checkout() {
  const { cart, cartTotal, resetCart } = useCart();
  const [vendedores, setVendedores] = useState([]);
  const [currSeller, setCurrSeller] = useState(2);
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchSeller = async () => {
      const seller = await getAllSeller();
      if (seller) {
        setVendedores([...seller, { ...seller[0], name: 'Ciclano Silva', id: 4 }]);
      }
    };

    fetchSeller();

    return () => {
      setVendedores([]);
    };
  }, [cart, history]);

  const submitOrder = async (event) => {
    event.preventDefault();

    if (endereço && numero) {
      const cartItens = cart.map(({ id, quantity }) => ({ id, quantity }));

      const sale = await createSale({
        sellerId: 2,
        totalPrice: cartTotal,
        deliveryAddress: endereço,
        deliveryNumber: numero,
        status: 'Pendente',
        cart: cartItens,
      });

      resetCart();
      localStorage.removeItem('cart');

      history.push(`/customer/orders/${sale.id}`);
    }
  };

  return (
    <S.Main>
      {
        cart.length
          ? cart.map((product) => (
            <CheckoutCard key={ product.id } product={ product } />
          ))
          : (<span>Ainda não há nada por aqui...</span>)
      }
      {/* <FormsNewOrder /> */}
      <S.Details>
        <h4>Fornecedores</h4>
        <div data-testid="customer_checkout__select-seller">
          {
            vendedores.length && (
              vendedores.map((vendedor, index) => (
                <button
                  type="button"
                  key={ index }
                  className={ currSeller === vendedor.id ? 'active' : '' }
                  onClick={ () => setCurrSeller(vendedor.id) }
                >
                  { vendedor.name }
                </button>
              ))
            )
          }
        </div>
      </S.Details>
      <S.Address>
        <h4>Endereço para Entrega</h4>
        <form>
          <input
            type="text"
            name="endereço"
            id="endereço"
            placeholder="Rua da Sua Satisfação"
            required
            value={ endereço }
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setEndereço(target.value) }
          />
          <input
            type="number"
            name="numero"
            id="numero"
            placeholder="Nº"
            value={ numero }
            required
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setNumero(target.value) }
          />
        </form>
      </S.Address>
      <S.Checkout>
        <div>
          <span>Total</span>
          <h2>
            { Number(cartTotal)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </h2>
        </div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          disabled={ !cartTotal }
          onClick={ submitOrder }
        >
          FINALIZAR
        </button>
      </S.Checkout>
    </S.Main>
  );
}

export default Checkout;
