import React, { useCallback } from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import type { IComplexData } from '../../types/complex-data';
import type {Store} from '../../types/stores';
import Card from '../card';
import ComplexDataCard from '../complex-data-card';
import Separator from '../separator';

interface IComplexDataListProps {
  data: IComplexData[];
  onChangeValue: (id: number, value: string) => void;
}

const keyExtractor = (item: IComplexData) => item.id.toString();

const renderSeparator = () => <Separator />;

export default function ComplexDataList({ data, onChangeValue }: IComplexDataListProps) {

  const handleChangeValue = useCallback((id: number, value: string) => {
    onChangeValue(id, value);
  }, [onChangeValue]);

  const renderItem: ListRenderItem<IComplexData> = ({ item }) =>
    <ComplexDataCard data={item} onChangeValue={handleChangeValue} />;

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      renderItem={renderItem}
    />
  );
}