import React from 'react';
import BlogIcon from '../icon/BlogIcon';
// import UserIcon from '../icon/UserIcon';
import styled from '../styled';
import Menu from './Menu';

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <Menu
        color="secondary"
        icon={<BlogIcon />}
        label={{ text: 'Blogs', link: '/' }}
      />
      {/* <Menu
        color="third"
        icon={<UserIcon />}
        label={{ text: 'About', link: '/about' }}
      /> */}
    </MenuBarWrapper>
  );
};

const MenuBarWrapper = styled.div`
  height: 56px;
  background-color: rgb(248 252 253 / 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: saturate(180%) blur(20px);
`;

export default MenuBar;
