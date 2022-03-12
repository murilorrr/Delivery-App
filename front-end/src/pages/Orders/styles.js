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
/* border: 1px solid black; */
margin: 0.3rem;
`;

export const OrderCard = styled(Link)`
  background-color: var(--gray-50);
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  border-radius: 1rem;
  padding: 0.5rem;
  color: var(--gray-800);
  /* border: 1px solid var(--crimson); */
  justify-content: center;
  margin: 0.2rem 0.5rem;

  span {
    margin: 0.2rem 0.4rem;
  }
`;
