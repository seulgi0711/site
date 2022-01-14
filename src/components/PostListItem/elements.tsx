import { Link } from 'gatsby';
import styled from '../styled';

export const PostWrapper = styled.div<{ side: 'left' | 'right' }>`
  padding: 20px;
  display: flex;
  align-items: center;

  @media (min-width: 875px) {
    flex-direction: ${({ side }) => (side === 'left' ? 'row-reverse' : 'row')};
  }
`;

export const PostContent = styled.div`
  position: relative;
`;

export const Title = styled.h4`
  display: inline-block;
  a {
    text-decoration: none;
  }
`;

export const Meta = styled.div`
  font-size: 1rem;
`;

export const TagListWrapper = styled.div`
  margin-top: 10px;
`;

export const Tag = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

export const ReadMore = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  margin: 20px 0;
  font-size: 1rem;
`;

export const Date = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;
export const UpperSide = styled.div`
  position: absolute;
  bottom: calc(100% + 80px);
  width: 100%;
  z-index: 1;
  color: ${({ theme }) => theme.color};
`;
