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
  padding: 1rem;
  background-color: #6dbd72;
  color: white;
  border-radius: 1rem;
  margin-top: 1rem;
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
export const Container = styled.div`
  max-width: 90%;
  margin: auto;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 5rem;
  height: 5rem;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
