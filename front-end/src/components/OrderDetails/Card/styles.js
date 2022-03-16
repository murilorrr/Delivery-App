import styled from 'styled-components';

export const CardProduct = styled.div`
background-color: var(--gray-50);
border-radius: 0.5rem;
display: flex;
justify-content: space-between;
overflow: hidden;
box-shadow: 0 0 10px rgb(0,0,0,0.02);

& + div {
  margin-top: 0.75rem;
}
`;

export const Image = styled.div`
background-image: ${({ src }) => `url(${src})`};
background-color: var(--white);
background-position: center;
background-size: contain;
background-repeat: no-repeat;
width: 20%;
height: 5rem;
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
  font-size: 1rem;
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

  span {
    font-size: 1rem;
  }

  &:first-child {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-800);
  }
}
`;
