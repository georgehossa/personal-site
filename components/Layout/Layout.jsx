import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './Layout.styles';
import NavBar from '../NavBar';

const Layout = ({children}) => (
  <>
    <Main>
      {children}
    </Main>
    <NavBar/>
  </>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
