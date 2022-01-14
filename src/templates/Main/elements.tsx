import styled from '../../components/styled';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const DarkSpace = styled.div`
  background: ${({ theme }) => theme.background};
  height: 50%;
  flex: none;
  position: fixed;
  height: 50vh;
  left: 0;
  right: 0;
  z-index: 1;
`;
