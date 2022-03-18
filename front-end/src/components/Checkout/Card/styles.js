import styled from 'styled-components';

export const CardProduct = styled.div`
background-color: var(--gray-50);
border-radius: 0.5rem;
display: flex;
justify-content: space-between;
overflow: hidden;
box-shadow: 0 0 10px rgb(0,0,0,0.02);

& + div {
  margin-top: 1rem;
}

`;

export const Image = styled.div`
background-image: ${({ src }) => `url(${src})`};
background-color: var(--white);
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width: 40%;
height: 7rem;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0.75rem;
flex: 1;

> div {
  display: flex;
  gap: 0.25rem;
}

h5 {
  font-size: 1.15rem;
  font-weight: 600;
}
`;

export const Options = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

div {
  display: inherit;
  gap: 0.15rem;

  &:first-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-800);
  }

  input {
    border: 1px solid var(--gray-100);
    border-radius: 0.25rem;
    width: 1.5rem;
    text-align: center;
  }

  button {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: var(--crimson);
    color: var(--white);
  }
}
`;

export const label = styled.label`
  width: 20em;
`;

export const input = styled.input`
display: block;
width: -webkit-fill-available;
box-shadow: 5px 10px 5px #888888;
height: 2em;
font-size: 18px;
border: 1px solid #888888;
border-radius: 5px;
padding: 0 0 0 0.5em;
`;
