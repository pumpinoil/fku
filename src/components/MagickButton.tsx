// src/components/MagickButton.tsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MagickButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(motion.button)<MagickButtonProps>`
  background-color: ${(props) =>
    props.variant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'};
  color: ${(props) => (props.variant === 'primary' ? '#FFFFFF' : '#1A202C')};
  border-radius: 0.375rem;
  padding: ${(props) =>
    props.size === 'small'
      ? '0.25rem 0.5rem'
      : props.size === 'large'
      ? '0.75rem 1.5rem'
      : '0.5rem 1rem'};
  font-size: ${(props) =>
    props.size === 'small'
      ? '0.875rem'
      : props.size === 'large'
      ? '1.25rem'
      : '1rem'};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const MagickButton: React.FC<MagickButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default MagickButton;
