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
height: 9rem;

img {
  align-self: center;
  border-radius: 0.5rem;
  height: 11rem;
  margin: 0 auto;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
flex: 1;

div {
  svg {
    margin-left: 0.5rem;
    color: var(--anzac);
  }
}

h5 {
  font-size: 1.15rem;
  font-weight: 600;
}

h6 {
  font-size: 1.25rem;
  font-weight: 600;
}
`;

export const Options = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

div {
  display: inherit;

  input {
    border: 1px solid var(--gray-100);
    border-radius: 0.25rem;
    width: 2rem;
    text-align: center;
    display: none;
  }

  button {
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    background: var(--crimson);
    color: var(--white);
  }
}
`;
