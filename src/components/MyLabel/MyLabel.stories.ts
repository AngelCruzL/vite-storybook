import { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from './MyLabel.tsx';

const meta = {
  title: 'Custom/UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
};
