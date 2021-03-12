import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Avatar.styles';

import styled from 'styled-components';
import Image from 'next/image';

const RoundedImage = styled(Image)`
  border-radius: 144px;
`;

const Avatar = ({ size }) => (
  <RoundedImage
    src='/images/avatar.png'
    alt='Foto de Jorge Ossa'
    width={size ? size : '144'}
    height={size ? size : '144'}
  />
);

Avatar.propTypes = {
  // bla: PropTypes.string,
};

Avatar.defaultProps = {
  // bla: 'test',
};

export default Avatar;
