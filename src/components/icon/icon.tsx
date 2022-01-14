import PropTypes from 'prop-types';
import React from 'react';
import { IconPath, IconWrapper, Label } from './elements';

const Icon = (props) => {
  const { d, size = '1em', label, style: styles } = props;

  return (
    <IconWrapper style={styles} role="figure">
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconPath d={d} />
      </svg>
      {label && <Label>{label}</Label>}
    </IconWrapper>
  );
};

Icon.propTypes = {
  d: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
