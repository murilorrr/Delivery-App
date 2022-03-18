import styled from 'styled-components';

const UserCard = styled.div`
  background-color: var(--gray-50);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: 0 0 10px rgb(0,0,0,0.02);
  padding: 0.5rem;

  div {
    margin: 0.25rem;
  }

  div:nth-child(1) {
    position: absolute;
    align-self: flex-start;
    font-weight: bold;
    color: var(--gray-50);
    background-color: var(--crimson);
    border-radius: 50%;
    padding: 0.25rem;
  }

  div:nth-child(2) {
    margin-top: 1.5rem;
  }

  button {
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    background-color: var(--crimson);
    color: var(--gray-50);
    padding: 0.35rem;
    border-radius: 1rem;
    font-weight: bold;
  }
`;

export default UserCard;
