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

export const FormItem = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    height: 35px;
    padding: 0 20px;
  }

  '& textarea': {
    width: 100%;
    height: 100px;
  }
  
  '&:last-child': {
  margin-bottom: 0;
}
`;

export const Form = styled.div`
  width: 400px;
  margin: auto;
`;
