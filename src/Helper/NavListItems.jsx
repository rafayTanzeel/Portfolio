import React from 'react';
import { FontIcon } from 'react-md';

export default [{
  key: 'profile',
  primaryText: 'Profile',
  leftIcon: <FontIcon>face</FontIcon>,
  active: true
}, {
  key: 'work',
  primaryText: 'Experience',
  leftIcon: <FontIcon>work</FontIcon>,
}, {
  key: 'skills',
  primaryText: 'Skills',
  leftIcon: <FontIcon>build</FontIcon>,
}, { key: 'divider', divider: true }, {
  key: 'github',
  primaryText: 'GitHub',
  leftIcon: <FontIcon secondary iconClassName="fa fa-github" />,
}, {
  key: 'linkedin',
  primaryText: 'LinkedIn',
  leftIcon: <FontIcon secondary iconClassName="fa fa-linkedin" />,
}, {
  key: 'send-mail',
  primaryText: 'Send mail',
  leftIcon: <FontIcon secondary>send</FontIcon>,
}];


// {
//   key: 'home',
//   primaryText: 'Home',
//   leftIcon: <FontIcon>home</FontIcon>,
  
// }, {
//   key: 'code',
//   primaryText: 'Code Skills',
//   leftIcon: <FontIcon>code</FontIcon>,
// }, 