import type React from 'react';
import { memo } from 'react';
import { View, type ViewProps } from 'react-native';
import styles from './styles';

interface ICardProps extends ViewProps {
  children: React.ReactNode;
}

function Card({ children, ...viewProps }: ICardProps) {
  return (
    <View style={styles.container} {...viewProps}>
      {children}
    </View>
  );
}

export default memo(Card);