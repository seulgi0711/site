import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  primary: string;
  secondary: string;
  third: string;
  color: string;
  colorSecondary: string;
  background: string;
  backgroundSecondary: string;
  darkBorderColor: string;
  variables: {
    phoneWidth: string;
    tabletWidth: string;
  };
};

export const theme: Theme = {
  primary: '#244449',
  secondary: '#ec655f',
  third: '#79cbb8',
  color: '#f8fcfd',
  colorSecondary: '#a2865e',
  background: '#244449',
  backgroundSecondary: '#3b3d42',
  darkBorderColor: '#4a4b50',
  variables: {
    phoneWidth: '(max-width: 684px)',
    tabletWidth: '(max-width: 900px)',
  },
};

export default styled as CreateStyled<Theme>;
