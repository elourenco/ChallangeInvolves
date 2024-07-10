import React, { memo } from 'react'
import { Text } from 'react-native'
import styles from './styles';

interface ITitleProps {
  description: string;
}

function Title({ description }: ITitleProps) {
  return (
    <Text style={styles.title}>{description}</Text>
  );
}

export default memo(Title);