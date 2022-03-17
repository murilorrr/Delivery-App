import styled from 'styled-components';

export const AdminPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-100);
  min-height: 100vh;
  padding: 1rem 1rem 6rem;

  h1:first-child {
    font-size: 25px;
    text-align: center;
    margin-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px dashed var(--gray-200);
  }

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.75rem 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: var(--white);
    box-shadow: 0 0 50px rgb(0,0,0,0.1);
  }

  div {
    
  }

  h4 {
    text-align: center;
    margin-top: 0.5rem;
    padding-top: 1rem;
  }

`;

export const AdminHeader = styled.header`
`;
