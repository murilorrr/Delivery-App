import styled from 'styled-components';

const CardProduct = styled.div`
background-color: var(--gray-100);
border-radius: 5px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
margin: 0.5rem;
padding: 0.5rem;
width: 70vw;
`;

export const Img = styled.img`
align-self: center;
border-radius: 0.5rem;
max-width: 5rem;
max-height: 5rem;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0.8rem;
max-width: 15rem;
color: var(--gray-800);
margin-bottom: 0.5rem;
`;

export const Quantity = styled.div`
display: flex;
`;

export const Button = styled.button`
background: var(--crimson);
border-radius: 50%;
color: var(--linen);
width: 1.5rem;
margin: 0 1.5rem;
`;

export const Input = styled.input`
display: flex;
text-align: center;
border-radius: 5rem;
max-width: 5rem;
`;

export const Price = styled.div`
  display: flex;
  width: min-content;
  padding: 0.2rem;
  margin-top: 0.2rem;
`;

export default CardProduct;
