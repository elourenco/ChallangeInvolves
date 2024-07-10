import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type ButtonVariant = 'primary' | 'secondary';

interface IButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant
}

const variantStyles = {
  primary: styles.primaryButton,
  secondary: styles.secondaryButton,
};

function Button ({ title, onPress, variant = 'primary' }: IButtonProps) {
  const buttonStyle = [styles.button, variantStyles[variant]];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default memo(Button);