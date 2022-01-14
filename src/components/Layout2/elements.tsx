import styled from '../styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 100%;
  max-width: 800px;

  @media (max-width: 684px) {
    margin-top: 0;
  }

  @media (max-width: 900px) {
    max-width: 660px;
  }
`;

export const InfoBanner = styled.div`
  text-align: left;
  margin: 20px 0 40px;
  padding: 10px 20px;
  border-radius: 10px;
  width: calc(100% - 40px);
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.color};

  span {
    font-weight: bold;
  }
`;
