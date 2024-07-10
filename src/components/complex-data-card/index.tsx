import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import type { IComplexData } from '../../types/complex-data';
import type { Store } from '../../types/stores';
import { formatDatetime } from '../../utils/datetime';
import Card from '../card';
import Input from '../input';
import styles from './styles';

interface IComplexCardProps {
  data: IComplexData
  onChangeValue: (id: number, value: string) => void;
  }

function ComplexDataCard({ data, onChangeValue }: IComplexCardProps) {
  const handleOnChange = useCallback((value: string) => {
    onChangeValue(data.id, value);
  }, [data.id, onChangeValue]);

  return (
    <Card>
      <Input label={data.title} text={data.value.toString()} onChangeText={handleOnChange} />
    </Card>
  );
}

export default memo(ComplexDataCard);