import styled from 'styled-components';

const FormCreateAnyUser = styled.form`
  margin: 0.5rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed var(--gray-200);

  input {
    display: block;
    width: -webkit-fill-available;
    box-shadow: 0.5rem 1rem 0.5rem var(--gray-200);
    height: 1rem;
    font-size: 18px;
    border: 1px solid var(--gray-100);
    border-radius: 2rem;
    padding: 1rem;
    margin: 0.5em 0;
  }

  select {
    /* background: var(--crimson); */
    border-radius: 1rem;
    /* border: 2px solid var(--crimson); */
    color: black;
    padding: 0.25rem 1rem;
    font-size: 1rem;
    margin: 0.5rem;
    box-shadow: 0.5rem 1rem 0.5rem var(--gray-200);
  }

  button {
    background: var(--crimson);
    font-weight: 600;
    width: 5.5rem;
    height: 2rem;
    border-radius: 1rem;
    color: var(--gray-50);
    margin: 0.5rem 0 1.2rem;
    padding: 1rem;
    font-size: 0.90rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0.5rem 1rem 0.5rem var(--gray-200);
  }
`;

// export const form = styled.form`
// display: flex;
// padding: 1em;
// gap: 1rem;
// flex-direction: column;
// background-color: var(--grey50);
// `;

// export const label = styled.label`
//   width: 20em;
// `;

// export const input = styled.input`
// display: block;
// width: -webkit-fill-available;
// box-shadow: 5px 10px 5px var(--gray-50);
// height: 1rem;
// font-size: 18px;
// border: 1px solid var(--gray-100);
// border-radius: 2rem;
// padding: 0 0 0 0.5em;
// margin: 0.5em 0;
// `;

// export const h2 = styled.h2`
// width: 20em;
// height: 2em;
// font-family: Roboto;
// font-style: normal;
// font-size: 15px;
// margin-top: 2rem;
//   &::after {
//     background-color: #242121;
//     content: "";
//     display: inline-block;
//     height: 0.15rem;
//     position: relative;
//     vertical-align: middle;
//     width: 100%;
//   }
// `;

// export const button = styled.button`
//   background: var(--gray-100);
//   width: 5.5rem;
//   height: 3em;
//   border-radius: 3px;
//   border: 2px solid var(--gray-100);
//   color: black;
//   margin: center;
//   padding: 0.25em;
//   font-size: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// export const select = styled.select`
//   background: var(--crimson);
//   border-radius: 3px;
//   border: 2px solid var(--crimson);
//   color: black;
//   padding: 0.25em 1em;
//   font-size: 15px;
// `;

export default FormCreateAnyUser;
