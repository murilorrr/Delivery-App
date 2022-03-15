import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
    <S.div>
      <Header />
      <S.tableDiv>
        <Table />
      </S.tableDiv>
      <div>
        <FormsNewOrder />
      </div>
    </S.div>
  );
}

export default Checkout;
