import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { cheapComputation } from '../../utils/computations';
import styles from './styles';

type Dimension = {
  height: number;
  width: number;
}

interface ISquareDataProps {
  square: Dimension;
}


export default function SquareData({ square }: ISquareDataProps) {
  const info = useMemo(
    () => cheapComputation(square.height, square.width),
    [square.height, square.width]
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Data</Text>
      <Text style={styles.label}>Height: <Text style={styles.value}>{square.height}</Text></Text>
      <Text style={styles.label}>Width: <Text style={styles.value}>{square.width}</Text></Text>
      <Text style={styles.label}>Area: <Text style={styles.value}>{info}</Text></Text>
    </View>
  );
}