import styled from 'styled-components';

export const OrderDetailsSellerPage = styled.div`
  background-color: var(--gray-100);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const OrderDetailsCard = styled.div`
background-color: var(--gray-50);
margin: 1rem 1rem;
border-radius: 1.5rem;
padding: 0.5rem;
max-width: 100vw;
height: 100%;
justify-content: center;

div:nth-child(1) {
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

span:nth-child(1) {
  flex-basis: 50%;
  margin-left: 1.8rem;
}

span:nth-child(2) {
  flex-basis: 50%;
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
  margin-left: 6rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem
}

div:nth-child(3) {
  margin: 1rem;
  display: block;
  text-align: center;
  color: var(--gray-800);
  font-weight: bold;
  font-size: 2rem;
}

span {
  margin: 0.3rem;
  color: var(--gray-800);
}

button {
  background-color: var(--crimson);
  margin: 1.2rem 0.4rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  color: var(--gray-50);
  max-width: 45%;
  font-weight: bold;

  &:disabled {
  opacity: 0.5;
}
}
`;
