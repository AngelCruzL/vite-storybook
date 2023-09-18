import { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from './MyLabel.tsx';

const meta = {
  title: 'Custom/UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Hello World',
  },
};
