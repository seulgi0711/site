import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '../styled';

export const PostWrapper = styled.div`
  width: 400px;
  max-width: 800px;
  text-align: left;
  padding: 20px;
  position: relative;
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

export const Tags = styled.div`
  margin-top: 10px;
  opacity: 0.5;
`;

export const Tag = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

export const CoverImage = styled(Img)`
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
`;

export const ReadMore = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  margin: 20px 0;
  font-size: 1rem;
`;
