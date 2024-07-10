import React, { useEffect } from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import * as Modules from '../../modules';
import type { ModuleType } from '../../types/menu';
import MenuItem from '../menu-item';
import styles from './styles';

interface IMenuProps {
  onPress: (module: ModuleType) => void;
}

const keyExtractor = (item: ModuleType) => item;

export default function Menu({ onPress }: IMenuProps) {
  const handlePress = (module: ModuleType) => {
    onPress(module);
  }

  const renderItem: ListRenderItem<ModuleType> = ({ item }) => {
    return (
      <MenuItem title={item} onPress={handlePress} />
    )
  }

  return (
   <FlatList
      style={styles.flatList}
      data={Object.keys(Modules) as ModuleType[]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
   />
  );
}