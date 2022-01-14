import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import styled from './styled';

const ProfileImage = () => {
  const data = useStaticQuery<GatsbyTypes.ProfileImageQueryQuery>(graphql`
    query ProfileImageQuery {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 150) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);

  const fixed: FixedObject = data?.file?.childImageSharp?.fixed;

  return <StyledImage fixed={fixed} />;
};

export default ProfileImage;

const StyledImage = styled(Img)`
  border-radius: 100%;
  background: ${({ theme }) => theme.secondary};
`;
