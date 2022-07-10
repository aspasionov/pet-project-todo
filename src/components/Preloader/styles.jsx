import styled, { keyframes } from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  height: 15px;
  width: 105px;
  display: flex;
  position: relative;
`;

export const Grow = keyframes`
  from {transform: scale(0,0); opacity: 0;}
  to {transform: scale(1,1); opacity: 1;}
`;

export const Move = keyframes`
  from {transform: translateX(0px)}
  to {transform: translateX(45px)}
`;

export const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #000;
  animation: ${Move} 500ms linear 0ms infinite;
  margin-right: 30px;
  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: ${Grow} 500ms linear 0ms infinite;
  }

  &:last-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    animation: ${Grow} 500ms linear 0s infinite reverse;
  }
`;
