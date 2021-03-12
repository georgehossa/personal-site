import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as Icons from '../Icons';
import { Container } from './NavBar.styles';

const NavBar = (props) => (
  <Container>
    <Link href="/">
      <a>
        <Icons.HomeIcon/>
      </a>
    </Link>
    <Link href="/about">
      <a>
        <Icons.UserIcon/>
      </a>
    </Link>
    <Link href="/projects">
      <a>
        <Icons.PlanetIcon/>
      </a>
    </Link>
  </Container>
);

NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

export default NavBar;
