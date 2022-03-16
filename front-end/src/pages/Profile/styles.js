import styled from 'styled-components';

export const Main = styled.main`
width: 100vw;
min-height: 100vh;
padding: 2rem;
display: flex;
flex-direction: column;
/* justify-content: center; */

> div:first-child {
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-start;
  justify-self: flex-start;
  
  h1 {
    font-size: 1.25rem;
  }

  span {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--crimson);
  }
}
`;

export const Menu = styled.nav`
display: flex;
justify-content: center;
flex-direction: column;
/* align-self: center; */
margin: 1rem 0;

> div, a {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  padding: 1rem 0;
  color: var(--gray-200);

  & + div {
    border-top: 1px solid var(--gray-200);
  }
}

> a {
  color: var(--gray-800);

  &:last-child {
    border-top: 1px solid var(--gray-200);
  }
}

`;
