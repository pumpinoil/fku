// src/types/magickCard.ts

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ParentType = 'header' | 'footer' | 'page' | 'card';

export interface ButtonStyle {
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  glowEffect: boolean;
  glowColor: string;
  crystalEffect: boolean;
}

export interface MagickButtonType {
  id: string;
  label: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  style: ButtonStyle;
  parentType: ParentType;
  parentId?: string;
  position: { x: number; y: number };
  disabled: boolean;
}


export interface MagickCardProps {

  id: string;

  index: number;

  label: string;

  componentType: string;

  content: string;

  opacity: number;

  imageOpacity: number;

  blur: number;

  borderRadius: number;

  borderWidth: number;

  borderOpacity: number;

  borderColor: string;

  glowEffect: boolean;

  glowColor: string;

  crystalEffect: boolean;

  position: { x: number; y: number };

  w: number;

  h: number;

  buttons: unknown[];

  background: string;

  backgroundColor: string;

  textColor: string;

  componentData: Record<string, string | number>;

  onSelect: () => void;

  padding: string;

  margin: string;

  fontSize: string;

  boxShadow: string;

  zIndex: number;

  rotate: number;

  skewX: number;

  skewY: number;

  scaleX: number;

  scaleY: number;

  flipX: boolean;

  flipY: boolean;

  isVisible: boolean;

  isLocked: boolean;

}


export interface PageSettings {
  backgroundImage: string;
  backgroundColor: string;
  backgroundBlur: number;
  backgroundOpacity: number;
}
