import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { ModuleType } from '../../types/menu';
import styles from './styles';

interface IMenuItemProps {
  title: ModuleType;
  onPress: (module: ModuleType) => void;
}

export default function MenuItem({ title, onPress }: IMenuItemProps) {
  const handlePress = useCallback(() => {
    onPress(title);
  }, [onPress, title]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}