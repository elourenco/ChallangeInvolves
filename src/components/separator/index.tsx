import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';

function Separator() {
  return <View style={styles.container} />;
}

export default memo(Separator);