import styled from '../styled';

export const SubMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 684px) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  background: #fafafa;
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
  border-radius: 5px;
  overflow: hidden;
  z-index: 99;
  background: #252627;

  li {
    margin: 0;
    white-space: nowrap;

    a {
      display: block;
      padding: 10px 15px;
    }
  }

  &Overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;
export const MobileMenuOverlay = styled.div``;

export const MenuTrigger = styled.button``;

export const DesktopMenuContainer = styled.div`
  display: block;

  @media (max-width: 684px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  list-style: none;
  border-right: 1px solid;
  margin-right: 18px;

  li {
    margin: 0 12px;
  }

  &Trigger {
    margin-right: 10px;
    padding: 0;
    line-height: 0;
    background: none;
    color: inherit;
    border: none;
    box-shadow: none;
    outline: none;
    appearance: none;
    cursor: pointer;
  }

  a {
    display: inline-block;
    margin-right: 15px;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const SubMenuTrigger = styled.button`
  background: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  box-shadow: none;
  margin: 0 12px;
  padding: 0;
  cursor: pointer;
  outline: none;
  appearance: none;
`;

export const MenuArrow = styled.span`
  display: inline-block;
  font-family: 'Inter UI';
  margin-left: 5px;
  transform: rotate(90deg);
`;

export const SubMenu = styled.ul`
  position: absolute;
  max-width: 300px;
  background: #fafafa;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  margin: 0;
  padding: 5px;
  list-style: none;
  border-radius: 5px;
  top: 35px;
  right: 70px;
  overflow: hidden;
  z-index: 99;
  background: ${({ theme }) => theme.darkBackgroundSecondary};

  li {
    text-align: left;
    margin: 0;
    white-space: nowrap;

    a {
      padding: 10px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.15);
    }
  }
`;
