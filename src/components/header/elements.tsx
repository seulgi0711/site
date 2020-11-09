import { keyframes } from '@emotion/core';
import styled from '../styled';

export const HeaderWrapper = styled.header`
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  background: #252627;

  a {
    text-decoration: none;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 760px;
  max-width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;

  & img {
    height: 44px;
  }
`;

export const Mark = styled.span`
  margin-right: 5px;
  font-size: 18px;
`;

const cursorAnimationFrame = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 1rem;
  background: #fe5186;
  margin-left: 5px;
  border-radius: 1px;
  animation: ${cursorAnimationFrame} 1s infinite;
`;

export const LogoText = styled.span`
  font-size: 18px;
`;

export const RightMenu = styled.span`
  display: flex;
  position: relative;
`;
