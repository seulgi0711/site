import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import styled from '../styled';

type Color = 'secondary' | 'third';

interface MenuProps {
  color: Color;
  icon: ReactNode;
  label: {
    link: string;
    text: string;
  };
}

const Menu = ({ color, icon, label }: MenuProps) => {
  return (
    <MenuWrapper>
      <IconWrapper color={color}>{icon}</IconWrapper>
      <Label color={color}>
        <Link to={label.link} activeStyle={{ fontWeight: 900 }}>
          {label.text}
        </Link>
      </Label>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div<{ color: Color }>`
  width: 40px;
  height: 40px;
  background-color: ${({ theme, color }) => theme[color]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  svg {
    fill: ${({ theme }) => theme.color};
  }
`;

const Label = styled.div<{ color: Color }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;

  a {
    text-decoration: none;
  }
`;

export default Menu;
