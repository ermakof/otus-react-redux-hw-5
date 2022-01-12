import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import AppBottom from '@src/AppBottom';

export default {
  component: AppBottom,
  decorators: [withKnobs],
  title: 'Example/AppBottom',
} as ComponentMeta<typeof AppBottom>;

const Template: ComponentStory<typeof AppBottom> = (args) => <AppBottom {...args} />;

export const Static = Template.bind({});

Static.args = {
  countUsers: number('num', 50),
};
