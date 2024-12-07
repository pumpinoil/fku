// src/components/MagickCard/MagickCard.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import MagickCard from './integrations/MagickCard';
import { MagickCardProps } from '../types/magickCard';

export default {
  title: 'Components/MagickCard',
  component: MagickCard,
} as Meta;

const Template: StoryFn<MagickCardProps & { onSelect: () => void }> = (args: MagickCardProps & { onSelect: () => void }) => (
  <MagickCard card={{ ...args }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: '1',
  content: '<p>Default Magick Card</p>',
  opacity: 1,
  imageOpacity: 1,
  blur: 0,
  borderRadius: 12,
  borderWidth: 2,
  borderOpacity: 1,
  borderColor: '#ffffff',
  glowEffect: true,
  glowColor: '#FFD700',
  crystalEffect: false,
  position: { x: 0, y: 0 },
  w: 3,
  h: 4,
  buttons: [],
  background: '',
  backgroundColor: '#1F2937',
  textColor: '#FFFFFF',
  onSelect: () => console.log('Card selected'),
};
