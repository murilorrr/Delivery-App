import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OrdersSellerPage = styled.div`
display: flex;
flex-direction: column;
background-color: var(--gray-100);
/* align-items: center; */
margin: 0;
box-sizing: border-box;
max-width: 100%;
min-height: 100vh;
padding: 1rem 1rem 6rem;
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
  font-weight: bold;
  padding: 0.2rem;
}

li {
  list-style-type: none;
  text-align: center;
  padding: 0.3rem;
  color: var(--gray-800);
}
`;

export const OrderCard = styled(Link)`
background-color: var(--gray-50);
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
border-radius: 0.5rem;
padding: 1rem;
color: var(--gray-800);
box-shadow: 2px 2px 5px rgb(0,0,0,0.02);

& + a {
  margin-top: 0.75rem;
}
`;

export const OrderCardHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

div {
  display: inherit;
  flex-direction: column;

  h5 {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    margin: 0.5rem 0;
    color: var(--gray-500);
  }
}

button {
  font-size: 1.5rem;
  font-weight: 600;
}
`;

export const ProductContainer = styled.div`
display: flex;
/* justify-content: space-between; */
align-items: center;
padding: 0.25rem 0;

span {
  padding: 1rem;
  background-color: var(--crimson);
  color: var(--white);
  font-weight: 700;
  border-radius: 0.75rem;
  margin-left: auto;
}
`;
export const Product = styled.div`
background-image: ${({ src }) => `url(${src})`};
background-color: var(--white);
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width: 3rem;
height: 3rem;

& + div {
  margin-left: 0.5rem;
}
`;

export const OrderCardFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 0;

div {
  display: inherit;
  flex-direction: column;

  span {
    font-weight: 600;
    
    &:first-child {
      font-weight: 400;
      margin-bottom: 0.25rem;
      color: var(--gray-500);
    }
  }
}
`;
