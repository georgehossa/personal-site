import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, IconsWrapper } from './Contact.styles';
import * as Icons from '../Icons';

const Contact = ({ text, ...rest }) => (
  <Container>
    <Text>{text}</Text>
    <IconsWrapper>
      {rest.twitter ? <a href='#'><Icons.TwitterIcon/></a> : null}
      {' '}
      {rest.linkedin ? <a href='#'><Icons.LinkedinIcon/></a> : null}
      {' '}
      {rest.github ? <a href='#'><Icons.GithubIcon/></a> : null}
    </IconsWrapper>
  </Container>
);

Contact.propTypes = {
  text: PropTypes.string,
};

export default Contact;
