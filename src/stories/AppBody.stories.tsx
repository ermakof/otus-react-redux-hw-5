import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import AppBody from '@src/AppBody';
import data from '@src/stories/__mock__/data';

export default {
  component: AppBody,
  decorators: [withKnobs],
  title: 'Example/AppBody',
} as ComponentMeta<typeof AppBody>;

const Template: ComponentStory<typeof AppBody> = () => <AppBody data={data} />;

export const Static = Template.bind({});
