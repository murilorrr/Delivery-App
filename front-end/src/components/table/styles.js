import styled from 'styled-components';

export const button = styled.button`
  border-radius: 0.3rem;
  border: 2px solid var(--gray-100);
  color: black;
  margin: center;
  padding: 0.8rem;
  font-size: 10px;
`;

export const div = styled.div`
top: 0;
padding: 1em;
border-radius: 5px;
display: box;
justify-content: center;
align-items: center;
`;

export const caption = styled.caption`
color: black;
place-content: center;
display: inline-flex;
margin: 1rem 0rem;
font-family: Roboto;
font-size: 2rem;
`;

export const table = styled.table`
background: var(--silk);
color: black;
font-size: 10px;
display: box;
justify-content: center;
align-items: center;
gap: 1rem;
`;

export const tbody = styled.tbody`
padding: 05px;

`;

export const thead = styled.thead`
padding: 05px;

`;

export const td = styled.td`
padding: 05px;

`;

export const th = styled.th`
padding: 05px;

// margin-left: 3px;
`;

export const tr = styled.tr`
background: var(--white);
padding: 05px;

`;

export const tfoot = styled.tfoot`
`;
