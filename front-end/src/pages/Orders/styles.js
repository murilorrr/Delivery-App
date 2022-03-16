import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
background-color: var(--gray-100);
/* align-items: center; */
margin: 0;
box-sizing: border-box;
max-width: 100%;
padding: 1rem 1rem 6rem;
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
