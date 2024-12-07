import { ReactNode } from "react";
import { ButtonVariant, ButtonSize, ButtonStyle, ParentType } from "./magickCard";

export interface MagickButtonType {
  id: string;
  label: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  style: ButtonStyle;
  parentType: ParentType;
  parentId?: string;
  position: { x: number; y: number };
  disabled: boolean;
}
