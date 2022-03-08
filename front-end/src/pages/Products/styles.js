import styled from 'styled-components';

export const ProductsPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
padding: 1rem;
box-sizing: border-box;
max-width: 100%;
`;

export const Main = styled.main`
display: column;
margin: 0;
padding: 0;
`;

export const ButtonGoToCart = styled.button`
/* position: fixed; */
align-items: center;
background-color: var(--crimson);
border-radius: 5rem;
bottom: 2rem;
color: var(--linen);
display: block;
padding: 1rem;
margin: 0.5rem 0.5rem;
right: 2rem;

span {
  justify-content: center;
}
`;
