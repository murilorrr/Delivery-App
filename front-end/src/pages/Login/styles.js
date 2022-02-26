import styled from 'styled-components';

export const ErrorMessage = styled.div`
display: none;
  &.error {
    display: block;
  }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
max-width: 450px;
margin: 0 auto;
`;
