import styled from 'styled-components';

export const CheckoutPage = styled.div`
background-color: var(--gray-50);
margin: 1rem 1rem;
border-radius: 1.5rem;
padding: 0.5rem;
max-width: 100vw;
height: 100%;
justify-content: center;

div {
  color: var(--gray-800);
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
}
`;

export const TextHeader = styled.h2`
color: var(--gray-800);
font-weight: bold;
text-align: center;
margin-top: 0.5rem;
`;

export const TableCheckout = styled.table`
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  border-radius: 0.3rem;
  margin: 2rem 0;

tbody, thead {
  display: flex;
  position: relative;
  align-items: stretch;
  color: var(--gray-800);
}

tr {
  display: flex;
  flex-wrap: wrap;
}

th, td {
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  border: 1px solid var(--gray-200);
  width: 40vw;
  height: 8vh;
  align-items: center;
}

tr td:nth-child(2) {
  justify-content: center;
  text-align: center;
}
`;

export const button = styled.button`
  border-radius: 1.5rem;
  color: var(--gray-100);
  background-color: var(--crimson);
  font-size: 15px;
  font-weight: bold;
  padding: 0.3rem;
  width: 70%;
`;

// export const table = styled.table`
// background: var(--silk);
// color: black;

// @media(max-width: 800px) {
//   font-size: 10px;
//   display: box;
//   justify-content: center;
//   align-items: center;
// }
// width: 100%;

// `;

// export const tbody = styled.tbody`
// padding: 05px;

// `;

// export const thead = styled.thead`
// padding: 05px;

// `;

// export const td = styled.td`
// padding: 05px;

// `;

// export const th = styled.th`
// padding: 05px;

// // margin-left: 3px;
// `;

// export const tr = styled.tr`
// background: var(--white);
// padding: 05px;

// `;

// export const tfoot = styled.tfoot`
// & tr:first-child {
//     background: var(--gray-100);
//   }
// `;
