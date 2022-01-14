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
  background-color: #f8fcfd;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export default MenuBar;
