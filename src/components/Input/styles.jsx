import styled from 'styled-components';

export const Error = styled.div`
  font-size: 12px;
  color: red;
  transform: translateY(-18px);
`;

export const FormItem = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    height: 35px;
    padding: 0 20px;
  }
  
  &.error {
    input {
      border: 1px solid red;
      &:focus {
        outline: 1px solid red
      }
    }
  }

  '& textarea': {
    width: 100%;
    height: 100px;
  }
  
  '&:last-child': {
  margin-bottom: 0;
}
`;
