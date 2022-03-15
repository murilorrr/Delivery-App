import styled from 'styled-components';

export const OrderDetailsSellerPage = styled.div`
  background-color: var(--gray-100);
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const OrderDetailsCard = styled.div`
background-color: var(--gray-50);
margin: 1rem;
border-radius: 1.5rem;
height: 10rem;
padding: 0.5rem;
max-width: 100vw;
height: 100vh;
justify-content: center;

div:nth-child(1) {
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}


div:nth-child(3) {
  margin: 1rem;
  display: block;
  text-align: center;
  color: var(--gray-800);
  font-weight: bold;
  font-size: 2rem;
}

span {
  margin: 0.3rem;
  color: var(--gray-800);

}

button {
  background-color: var(--crimson);
  margin: 1.2rem 0.4rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
  color: var(--gray-50);
  max-width: 45%;
  font-weight: bold;
}
`;
