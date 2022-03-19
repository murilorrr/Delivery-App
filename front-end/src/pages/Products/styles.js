import styled from 'styled-components';

export const Main = styled.main`
display: flex;
flex-direction: column;
background-color: var(--gray-100);
/* align-items: center; */
justify-content: center;
margin: 0;
box-sizing: border-box;
max-width: 100%;
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

export const Div = styled.div`
display: flex;
`;
