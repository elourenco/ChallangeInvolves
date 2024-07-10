import React from 'react';

import { storesMock } from '../../../mocks';
import Screen from '../../components/screen';
import StoreList from '../../components/store-list';

export default function Code1() {
  return (
    <Screen>
      <StoreList stores={storesMock} />
    </Screen>
  );
}