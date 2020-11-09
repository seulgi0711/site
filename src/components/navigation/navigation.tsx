import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
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
      {previousPath && (
        <Button>
          <Link to={previousPath}>
            <PrevIcon>←</PrevIcon>
            <TextButton>{previousLabel}</TextButton>
          </Link>
        </Button>
      )}
      {nextPath && (
        <Button>
          <Link to={nextPath}>
            <TextButton>{nextLabel}</TextButton>
            <NextIcon>→</NextIcon>
          </Link>
        </Button>
      )}
    </NavigationWrapper>
  ) : null;

Navigation.propTypes = {
  nextPath: PropTypes.string,
  previousPath: PropTypes.string,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
};

export default Navigation;
