// UserInfo.stories.js | UserInfo.stories.jsx

import React from 'react';

import { UserInfo } from './UserInfo';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
};

const Template = (args) => <UserInfo {...args} />;

export const Base = Template.bind({});
Base.args = {
  avatarUrl: 'http://placekitten.com/g/200/200',
  name: 'Kevin Sanjaya',
  role: 'Teacher',
};
