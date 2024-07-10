import React from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import type {Store} from '../../types/stores';
import Separator from '../separator';
import StoreCard from '../store-card';

interface IStoreListProps {
  stores: Store[];
}

const keyExtractor = (item: Store) => item.id.toString();

const renderItem: ListRenderItem<Store> = ({ item }) =>
  <StoreCard store={item} />;

const renderSeparator = () => <Separator />;

export default function StoreList({ stores }: IStoreListProps) {
  return (
    <FlatList
      data={stores}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}