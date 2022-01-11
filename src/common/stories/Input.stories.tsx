import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Input from '@src/common/Input';

export default {
  component: Input,
  decorators: [withKnobs],
  title: 'Example/Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Static = Template.bind({});

Static.args = {
  onChange: action('changed'),
  autoFocus: boolean('autoFocus', true),
};
