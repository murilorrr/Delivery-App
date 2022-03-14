import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OrdersSellerPage = styled.div`
background-color: var(--gray-100);
width: 100vw;
`;

export const OrderLink = styled(Link)`
justify-content: center;

div {
  padding: 1rem;
}

ul {
  margin-bottom: 0.8rem;
  margin-left: 3rem;
  margin-right: 3rem;
  border-radius: 0.8rem;
  background-color: var(--gray-50);
}

ul li:nth-child(2) {
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
  margin-left: 5rem;
  border-radius: 1.5rem;
}

li {
  list-style-type: none;
  text-align: center;
  padding: 0.3rem;
  color: var(--gray-800);
}
`;
