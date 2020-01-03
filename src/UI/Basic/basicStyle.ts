import styled, { css } from 'styled-components';

export const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}
`;
export const Alert = styled.div`
  padding: 3rem;
  background-color: #6dbd72;
  color: white;
`;
export const PostStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1em 1rem;
  margin-bottom: 0.5rem;
  :hover {
    border-color: red;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
