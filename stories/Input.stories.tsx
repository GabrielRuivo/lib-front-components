import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
