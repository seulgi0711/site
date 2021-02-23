import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '../styled';
import {
  Button,
  NavigationWrapper,
  NextIcon,
  PrevIcon,
  TextButton,
} from './elements';

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) =>
  previousPath || nextPath ? (
    <NavigationWrapper>
      <ButtonWrapper>
        {previousPath && (
          <StyledButton>
            <Link to={previousPath}>
              <PrevIcon>←</PrevIcon>
              <TextButton>{previousLabel}</TextButton>
            </Link>
          </StyledButton>
        )}
      </ButtonWrapper>
      <ButtonWrapper>
        {nextPath && (
          <StyledButton>
            <Link to={nextPath}>
              <TextButton>{nextLabel}</TextButton>
              <NextIcon>→</NextIcon>
            </Link>
          </StyledButton>
        )}
      </ButtonWrapper>
    </NavigationWrapper>
  ) : null;

Navigation.propTypes = {
  nextPath: PropTypes.string,
  previousPath: PropTypes.string,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
};

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;

  &:first-of-type {
    justify-content: flex-end;
  }

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 100%;
`;

export default Navigation;
