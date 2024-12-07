// src/components/Button/MagickButton.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import MagickButton from './MagickButton';

export default {
  title: 'Components/MagickButton',
  component: MagickButton,
} as Meta;

const Template: StoryFn<typeof MagickButton> = (args: { variant: 'primary' | 'secondary'; size: 'medium' | 'small' | 'large' }) => <MagickButton onClick={function (): void {
  throw new Error('Function not implemented.');
} } {...args}>Click Me</MagickButton>;
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
};
