import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
background-color: var(--gray-100);
/* align-items: center; */
min-height: 100vh;
padding: 1rem 1rem 6rem;
`;

export const OrderDetailsHeader = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */

h1 {
  border-top: 1px dashed var(--gray-200);
  border-bottom: 1px dashed var(--gray-200);
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.5rem;
    
    &:last-child {
      font-size: 1rem;
      font-weight: 400;
    }
  }
}

h2 {
  display: flex;
  flex-direction: column;
  font-size: 1.15rem;
}

button {
  width: 100%;
  font-size: 1.15rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--crimson);
  color: var(--white);

  &:disabled {
    background: var(--gray-200);
    color: var(--gray-500);
  }

  &:hover {
    filter: brightness(0.9);
  }
}
`;

export const Total = styled.div`
border-top: 1px dashed var(--gray-500);
margin-top: 1.5rem;

div {
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  margin-top: 1.5rem;
  padding: .5rem;
  width: 100%;
  border-radius: 0.25rem;

    span {
    color: var(--gray-500);
    font-size: 1.25rem;
    
    &:last-child {
      color: var(--gray-800);
      font-weight: 700;
    }
  }
}
`;
