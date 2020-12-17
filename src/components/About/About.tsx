import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from '../styled';
import Socials from './Socials';

function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
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

  const { fixed } = data.file.childImageSharp;

  return (
    <AboutWrapper>
      <Title>Nakta's Dev Story</Title>
      <div>Functional Programming</div>
      <div>Front-End Developer</div>
      <UpperSide>
        <ProfileImage fixed={fixed} />
        <Socials />
      </UpperSide>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  flex: none;
  width: 640px;
  padding: 20px 64px;
  position: relative;
`;

const Title = styled.h1``;

const ProfileImage = styled(Img)`
  border-radius: 100%;
  background: ${({ theme }) => theme.darkBackgroundSecondary};
`;

const UpperSide = styled.div`
  position: absolute;
  z-index: 1;
  bottom: calc(100% + 30px);
  color: #fff;
  display: flex;
  left: 60px;
  align-items: flex-end;
`;

export default About;
