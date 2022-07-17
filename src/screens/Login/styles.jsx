import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: #ccc;
  height: calc(100vh - 39px);
  padding: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: blue;
  text-align: center;
`;

export const Form = styled.div`
  width: 400px;
  margin: auto;
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
  transform: translateY(-18px);
`;
