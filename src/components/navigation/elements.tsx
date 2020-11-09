import styled from '../styled';

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1024px;
  max-width: 100%;
  margin: 80px 0 40px;
`;

export const Button = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.lightBackgroundSecondary};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  max-width: 40%;
  cursor: pointer;
  appearance: none;
  background: ${({ theme }) => theme.darkBackgroundSecondary};

  + .button {
    margin-left: 10px;
  }

  a {
    display: flex;
    padding: 8px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &Text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const PrevIcon = styled.span`
  margin-right: 8px;
`;

export const TextButton = styled.span``;

export const NextIcon = styled.span`
  margin-left: 8px;
`;
