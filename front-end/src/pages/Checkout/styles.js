import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
background-color: var(--gray-100);
/* align-items: center; */
min-height: 100vh;
padding: 1rem 1rem 6rem;

> span {
  width: 100%;
  height: 7rem;
  font-size: 1.25rem;
  text-align: center;
  line-height: 7rem;
  border: 1px dashed var(--gray-200);
  border-radius: 0.5rem;
  margin: 2rem 0;
}
`;

export const Details = styled.div`
  /* border-bottom: 1px dashed var(--gray-200); */
padding: 1rem 0;

h4 {
  margin-bottom: 0.5rem;
}

div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--gray-800);
    background: var(--gray-200);
    
    &.active {
      color: var(--white);
      background: var(--crimson);
    }
    
    &:hover {
      filter: brightness(0.9);
    }
  }
}
`;

export const Address = styled.div`
padding: 1rem 0;
margin-bottom: 2rem;

h4 {
  margin-bottom: 0.5rem;
}

form {
  display: flex;
  gap: 0.5rem;

  input {
    font-size: 1rem;
    padding: 0.875rem;
    border: none;
    outline: none;
    background-color: var(--white);
    width: 20%;
    border-radius: 0.5rem;

    &:-webkit-autofill {
    -o-text-fill-color: var(--white);
    box-shadow: 0 0 0px 1000px white inset;
    }

    &:first-child {
      width: 80%;
    }
  }
}
`;

export const Checkout = styled.div`
display: flex;
justify-content: space-between;
margin: auto 0;

div {
  display: flex;
  flex-direction: column;
}

button {
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  background: var(--crimson);
  color: var(--white);

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--gray-500);
    background: var(--gray-200);
  }
}
`;
