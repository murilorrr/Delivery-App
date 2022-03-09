import styled from 'styled-components';
import ReactSwitch from 'react-switch';

export const Main = styled.main`
width: 100vw;
height: 100vh;
padding: 2rem;
display: flex;
justify-content: center;
flex-direction: column;

h2 {
  margin: 1rem 0 2rem;
  font-size: 1.25rem;
  color: var(--gray-500);
  font-weight: normal;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

label {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  width: 100%;
  position: relative;
  border: 1px solid transparent;
  box-shadow: 0 0 75px var(--gray-100);

  &.error {
    border: 1px solid var(--crimson);
  }

  img {
    width: 1.5rem;

    &:last-child {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  input {
    flex: 1;
    font-size: 1rem;
    padding: 0.875rem;
    border: none;
    outline: none;
    background-color: transparent;
    width: max-content;

    &:-webkit-autofill {
    -o-text-fill-color: var(--white);
    box-shadow: 0 0 0px 1000px white inset;
    }
  }
}
`;

export const Reminder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
color: var(--gray-800);
padding: 0 1rem;
margin: 0.5rem 0 3rem;
`;

export const Switch = styled(ReactSwitch)`
.react-switch-bg {
  background-color: ${({ checked }) => {
    if (checked) return 'var(--crimson)';
    return '#888888';
  }} !important;
}
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.25rem;
  padding: 1.5rem 3rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  background: var(--crimson);
  color: var(--white);
  z-index: 10;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Register = styled.div`
display: flex;
gap: 0.25rem;

a {
  color: var(--metallic-bronze);
}
`;

export const ErrorMessage = styled.div`
display:none;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: #00000057;
z-index: 50;
justify-content: center;
align-items: center;

&.error {
  display: flex;
}

div {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 1rem;
}
`;
