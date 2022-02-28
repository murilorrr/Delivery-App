import React, { useEffect, useState } from 'react';
import { getAllSalesFromUser, loginUser, getAllSeller } from '../../fetchs';
import { useHistory } from 'react-router-dom';
import Exit from '../../components/buttons/exit';

const twoSeconds = 2000;

export default function Login() {
  const [name, setName] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const [total, setTotal] = useState('');
  const [cars, setCar] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    console.log('useEffect !!!!');
    const user = JSON.parse(localStorage.getItem('user'));
    const data = await getAllSalesFromUser(user.id);
    const seller = await getAllSeller();

    if (!user) history.push('/login');
    else setName(user.name);
    
    if (seller) {
      setVendedor(seller);
    }

    if (data) {
      setCar(data);
    }

    // localStorage.setItem('total', JSON.stringify(total));
  }, [total]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { error: message, token } = await loginUser({ email, password });
    console.log(token);
    const { name, role } = await getByEmail(email);

    const userInfo = { name, email, role };
    
    const user = { ...userInfo, token };
    
    if (token) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      console.error(message);
      setError(message);
      setTimeout(() => setError(''), twoSeconds);
    }
    history.push('/customer/products');
  };

  const submitOrders = async (e) => {
    history.push(`/customer/orders/:${id}`);
  };

  return (
    <div>
      <header>
        <nav>
          <div>
          <button
            type="button"
            onClick={ () => history.push('/customer/products') }
          >
            PRODUTOS
          </button>
          <button
            type="button"
            onClick={ () => history.push('/customer/orders') }
          >
            MEUS PEDIDOS
          </button>
          </div>
          <div>
            <h3>`${name}`</h3>
            <Exit />
          </div>
        </nav>
      </header>
      <table>
        <caption>Monthly savings</caption>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
        {cars.map((car, index) => {
          (<tr key={index}>
            <td>
              {car.id}
            </td>
            <td
              data-testid={`customer_checkout__element-order-table-name-${index}`}
            >
              {car.name}
            </td>
            <td
              data-testid={`customer_checkout__element-order-table-quantity-${index}`}
            >
              {car.quantity}
            </td>
            <td
              data-testid={`customer_checkout__element-order-table-unit-price-${index}`}
            >
              {car.valor}
            </td>
            <td
              data-testid={`customer_checkout__element-order-table-sub-total-${index}`}
            >
              {car.valor * car.quantity}
            </td>
            <td>
              <button
                onClick={}
                data-testid={`customer_checkout__element-order-table-remove-${index}`}
              >
                Remover
              </button>
            </td>
          </tr>)
        })}
        <div>{`Total: R$ ${total}`}</div>
      </table>
      <S.form onSubmit={ submitOrders }>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label for="vendedor">P.Vendedora Responsável</label> <br/>
        <select
          name="vendedor"
          value={ vendedor }
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target }) => setVendedor(target.value) }
        >
          {vendedor.map((vendedor) => {
            <option value={vendedor.name}>`${vendedor.name}`</option>
          })}
        </select>
        <label for="endereço">Endereço</label> <br/>
        <input
          type="text"
          name="endereço"
          id="endereço"
          value={ endereço }
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setEndereço(target.value) }
        />
        <label for="numero">Número</label> <br/>
        <input
          type="number"
          name="numero"
          id="numero"
          value={ numero }
          data-testid="customer_checkout__input-addressNumber"
          onChange={ ({ target }) => setNumero(target.value) }
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ submitOrders }
        >
          FINALIZAR PEDIDO
        </button>

        <S.ErrorMessage
          data-testid="common_login__element-invalid-email"
          className="error"
          visible={ error === '' }
        >
          {error}
        </S.ErrorMessage>
      </S.form>

    </div>
  );
}
