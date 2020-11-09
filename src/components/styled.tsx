import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  lightBackground: string;
  lightBackgroundSecondary: string;
  lightColor: string;
  lightColorSecondary: string;
  lightBorderColor: string;
  darkBackground: string;
  darkBackgroundSecondary: string;
  darkColor: string;
  darkColorSecondary: string;
  darkBorderColor: string;
  variables: {
    phoneWidth: string;
    tabletWidth: string;
  }
}

export const theme: Theme = {
  lightBackground: '#fff',
  lightBackgroundSecondary: '#eaeaea',
  lightColor: '#222',
  lightColorSecondary: '#999',
  lightBorderColor: '#dcdcdc',
  darkBackground: '#292a2d',
  darkBackgroundSecondary: '#3b3d42',
  darkColor: '#a9a9b3',
  darkColorSecondary: '#73747b',
  darkBorderColor: '#4a4b50',
  variables: {
    phoneWidth: '(max-width: 684px)',
    tabletWidth: '(max-width: 900px)',
  },
};


export default styled as CreateStyled<Theme>
