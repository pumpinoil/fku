// src/components/Designer/GlassCard.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import GlassCard from './GlassCard';
import { MagickCardProps } from '../types/magickCard';

export default {
  title: 'Designer/GlassCard',
  component: GlassCard,
} as Meta;

const Template: StoryFn<{ card: MagickCardProps; onSelect: () => void }> = (args: { card: MagickCardProps; onSelect: () => void }) => <GlassCard label={''} index={0} id={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: {
    id: '1',
    content: 'Sample Magick Card',
    backgroundImage: '/stylecard.jpg',
    opacity: 0.8,
    imageOpacity: 1,
    blur: 10,
    borderRadius: 'lg',
    borderWidth: 2,
    borderOpacity: 0.5,
    borderColor: '#FFD700',
    glowEffect: true,
    glowColor: '#FFD700',
    crystalEffect: false,
    position: { x: 100, y: 100 },
    w: 200,
    h: 300,
    buttons: [],
    background: '',
    backgroundColor: '#1F2937',
    textColor: '#FFFFFF',
  },
  onSelect: () => console.log('Card selected'),
};
