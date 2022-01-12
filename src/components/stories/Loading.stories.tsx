import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Loading from '@src/components/Loading';

export default {
  component: Loading,
  decorators: [withKnobs],
  title: 'Example/Loading',
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Static = Template.bind({});
