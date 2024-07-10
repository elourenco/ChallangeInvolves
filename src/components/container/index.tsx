import type React from 'react';
import { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IContainerProps {
  children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default memo(Container);