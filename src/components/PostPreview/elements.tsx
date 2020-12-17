import { Link } from 'gatsby';
import styled from '../styled';

export const PostWrapper = styled.div`
  width: 400px;
  max-width: 800px;
  text-align: left;
  padding: 20px;
  position: relative;
  flex: none;
  
  /* margin: 0 auto 20px; */

  /* &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.lightBorderColor};
    border-color: ${({ theme }) => theme.darkBorderColor};
  } */

  @media (max-width: 900px) {
    max-width: 660px;
  }

  h1 {
    margin: 0 0 10px;
  }

  img {
    border-radius: 8px;
  }
`;

export const PostContent = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  a {
    text-decoration: none;
  }
`;

export const Meta = styled.div`
  font-size: 1rem;
  /* margin-bottom: 30px; */
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
