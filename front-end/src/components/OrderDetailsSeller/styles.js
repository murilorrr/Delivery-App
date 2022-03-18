import styled from 'styled-components';

// Estilização auxiliada por uma thread no StackOverFlow:
// https://stackoverflow.com/questions/41468762/change-orientation-to-vertical-table-rows-html-css
const TableOrderDetails = styled.table`
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

export default TableOrderDetails;
