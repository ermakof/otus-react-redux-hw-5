import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import UserForm from '@src/components/UserForm';

export default {
  component: UserForm,
  decorators: [withKnobs],
  title: 'Example/UserForm',
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = (args) => <UserForm {...args} />;

export const Static = Template.bind({});

Static.args = {
  firstName: 'Иван',
  lastName: 'Иванов',
  onSubmit: action('submitted'),
};
