import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const OrderPage = styled.div`
background-color: var(--gray-100);
height: 100vh;
width: 100vw;
`;

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin: 0.3rem;
`;

export const OrderCard = styled(Link)`
  background-color: var(--gray-50);
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  padding: 0.5rem;
  color: var(--gray-800);
  justify-content: center;
  margin: 0.4rem 0.5rem;

  span:nth-child(1) {
    margin: 0.5rem 2rem 0.5rem 0;
    width: 30%;
  }

  span:nth-child(2) {
    margin: 0.5rem 0 0.5rem 2rem;
    width: 30%;
  }

  span:nth-child(3) {
  color: ${({ orderStatus }) => {
    switch (orderStatus) {
    case 'Pendente':
      return 'var(--gray-100)';
    case 'Preparando':
      return 'var(--gray-800)';
    case 'Em Trânsito':
      return 'var(--gray-800)';
    case 'Entregue':
      return 'var(--gray-100)';

    default:
      break;
    }
  }};
  background-color: ${({ orderStatus }) => {
    switch (orderStatus) {
    case 'Pendente':
      return 'var(--crimson)';
    case 'Preparando':
      return 'var(--anzac)';
    case 'Em Trânsito':
      return 'var(--marzipan)';
    case 'Entregue':
      return 'var(--tuscany)';

    default:
      break;
    }
  }};;
  width: 8rem;
  /* margin-left: 4.1rem; */
  margin-top: 0.5rem;
  border-radius: 1.5rem;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
  flex-basis: 100%;
}

span:nth-child(4) {
  margin: 1rem 0;
  font-weight: bold;
}
`;
