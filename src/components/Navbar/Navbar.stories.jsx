// UserInfo.stories.js | UserInfo.stories.jsx

import React from 'react';

import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Base = Template.bind({});
Base.args = {};
