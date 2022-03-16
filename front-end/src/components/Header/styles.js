import { Link as RouterDomLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
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
z-index: 10;

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }

  span {
    margin-top: 0.25rem;
    font-size: 0.75rem;
  }
}
`;

export const ButtonGoToCart = styled.button`
align-items: center;
background-color: var(--crimson);
border-radius: 5rem;
bottom: 2rem;
color: var(--linen);
display: block;
padding: 1rem;
margin: 0.5rem 0.5rem;
right: 2rem;

&:disabled {
  opacity: 0.5;
}

span {
  justify-content: center;
}
`;

export const Link = styled(RouterDomLink)`
color: ${({ to, current }) => {
    if (to === current) return 'var(--crimson)';
    return 'var(--gray-500)';
  }}
`;
