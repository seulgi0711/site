import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {
  DesktopMenuContainer,
  MenuArrow,
  MenuList,
  MenuTrigger,
  MobileMenu,
  MobileMenuContainer,
  MobileMenuOverlay,
  SubMenuOverlay,
  SubMenuTrigger,
} from './elements';

const MainMenu = ({ mainMenu, mainMenuItems, isMobileMenu }) => {
  const menu = mainMenu.slice(0);
  !isMobileMenu && menu.splice(mainMenuItems);

  return menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ));
};

const SubMenu = ({ mainMenu, mainMenuItems, onToggleSubMenu }) => {
  const menu = mainMenu.slice(0);
  menu.splice(0, mainMenuItems);

  const items = menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ));

  return (
    <>
      {items}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <SubMenuOverlay role="button" tabIndex={0} onClick={onToggleSubMenu} />
    </>
  );
};

const menuIcon = `M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z`;
const toggleIcon = `M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z`;

const Menu = ({
  mainMenu = [],
  mainMenuItems,
  menuMoreText,
  isMobileMenuVisible,
  isSubMenuVisible,
  onToggleMobileMenu,
  onToggleSubMenu,
}) => {
  const isSubMenu = !(mainMenuItems >= mainMenu.length) && mainMenuItems > 0;

  return (
    <>
      <MobileMenuContainer>
        <>
          {isMobileMenuVisible ? (
            <>
              <MobileMenu>
                <MainMenu mainMenu={mainMenu} isMobileMenu />
              </MobileMenu>
              <MobileMenuOverlay onClick={onToggleMobileMenu} />
            </>
          ) : null}
          <MenuTrigger
            style={{ color: 'inherit' }}
            onClick={onToggleMobileMenu}
            type="button"
            aria-label="Menu"
          >
            <Icon style={{ cursor: 'pointer' }} size={24} d={menuIcon} />
          </MenuTrigger>
        </>
      </MobileMenuContainer>
      <DesktopMenuContainer>
        <MenuList>
          <MainMenu mainMenu={mainMenu} mainMenuItems={mainMenuItems} />
          {isSubMenu ? (
            <>
              <SubMenuTrigger
                onClick={onToggleSubMenu}
                type="button"
                aria-label="Menu"
              >
                {menuMoreText || 'Menu'} <MenuArrow>&gt;</MenuArrow>
              </SubMenuTrigger>
              {isSubMenuVisible ? (
                <SubMenu>
                  <SubMenu
                    mainMenu={mainMenu}
                    mainMenuItems={mainMenuItems}
                    onToggleSubMenu={onToggleSubMenu}
                  />
                </SubMenu>
              ) : null}
            </>
          ) : null}
        </MenuList>
      </DesktopMenuContainer>
    </>
  );
};

Menu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
  isMobileMenuVisible: PropTypes.bool,
  isSubMenuVisible: PropTypes.bool,
  onToggleMobileMenu: PropTypes.func,
  onToggleSubMenu: PropTypes.func,
  onChangeTheme: PropTypes.func,
};

SubMenu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  onToggleSubMenu: PropTypes.func,
};

export default Menu;
