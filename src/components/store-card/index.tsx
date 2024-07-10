import React, { memo } from 'react';
import { Text, View } from 'react-native';
import type { Store } from '../../types/stores';
import { formatDatetime } from '../../utils/datetime';
import Card from '../card';
import styles from './styles';

interface IStoreCardProps {
  store: Store
  }

function StoreCard({ store }: IStoreCardProps) {
  return (
    <Card>
      <Text style={styles.title}>{`${store.id} - ${store.name}`}</Text>
      <Text style={styles.subTitle}>{store.address}</Text>
      <Text style={styles.subTitle}>{store.name}</Text>
      <Text style={styles.subTitle}>{formatDatetime(store.createdAt)}</Text>
    </Card>
  );
}

export default memo(StoreCard);