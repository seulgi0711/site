import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../menu';
import {
  Cursor,
  HeaderInner,
  HeaderWrapper,
  Logo,
  LogoText,
  Mark,
  RightMenu,
} from './elements';

const Header = props => {
  const {
    siteLogo,
    logoText,
    mainMenu,
    mainMenuItems,
    menuMoreText,
    defaultTheme,
  } = props;
  const defaultThemeState =
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
    null;
  const [userTheme, changeTheme] = useState(defaultThemeState);
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);
  const [isSubMenuVisible, toggleSubMenu] = useState(false);
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible);
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible);

  return (
    <>
      <Helmet>
        <body />
      </Helmet>
      <HeaderWrapper>
        <HeaderInner>
          <Link to="/">
            <Logo>
              {siteLogo.src ? (
                <img src={siteLogo.src} alt={siteLogo.alt} />
              ) : (
                <>
                  <Mark>&gt;</Mark>
                  <LogoText>{logoText}</LogoText>
                  <Cursor />
                </>
              )}
            </Logo>
          </Link>
          <RightMenu>
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              isSubMenuVisible={isSubMenuVisible}
              menuMoreText={menuMoreText}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
            />
          </RightMenu>
        </HeaderInner>
      </HeaderWrapper>
    </>
  );
};

Header.propTypes = {
  siteLogo: PropTypes.object,
  logoText: PropTypes.string,
  defaultTheme: PropTypes.string,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
};

export default Header;
