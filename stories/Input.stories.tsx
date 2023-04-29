import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    itemType: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};
