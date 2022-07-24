import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: aliceblue;
  flex: 0 0 auto;
  margin-right: 10px;
  display: flex;
  & > * {
    margin: auto;
  }
`;

export const UserContent = styled.div`
  font-size: 14px;
  color: aliceblue;
  min-width: 150px;
  div {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const UserExit = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  color: #fff;
  transition: all .3s;
  
  & > * {
    margin: auto;
  }
  
  &:hover {
    transform: scale(1.2);
  }
  
  cursor: pointer;
`;
