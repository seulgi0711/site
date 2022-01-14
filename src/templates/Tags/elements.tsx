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
export const PostsWrapper = styled.div`
  padding-top: 50vh;
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: auto;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  /* & > *&:not(:first-of-type) {
    margin-left: 40px;
  } */
`;
export const TagInfoWrapper = styled.div`
  margin-top: 40px;
  font-size: 18px;
`;
