import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import useCart from '../../hooks/useCart';
import Header from '../../components/Header';
import Table from '../../components/table';
import FormsNewOrder from '../../components/forms/formNewOrder';
import * as S from './styles';

function Checkout() {
  const history = useHistory();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('user'))) {
      history.push('/login');
    }
  }, [history]);

  return (
    <div>
      <S.div>
        <Header />
      </S.div>
      <S.tableDiv>
        <Table />
      </S.tableDiv>
      <div>
        <FormsNewOrder />
      </div>
    </div>
  );
}

export default Checkout;
