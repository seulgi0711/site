import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from '../footer';
import styled from '../styled';
import { Container, Content } from './elements';

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const {
    title,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
    copyrights,
  } = data.site.siteMetadata;

  return (
    <Container>
      <DarkSpace />
      {/* <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
      /> */}
      <Content>{children}</Content>
      <Footer copyrights={copyrights} />
    </Container>
  );
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        logo {
          src
          alt
        }
        logoText
        defaultTheme
        copyrights
      }
    }
  }
`;

const DarkSpace = styled.div`
  background: ${({ theme }) => theme.darkBackground};
  height: 50%;
  flex: none;
`;

export default Layout;
