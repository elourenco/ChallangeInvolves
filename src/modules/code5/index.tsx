import React from 'react';

import { complexDataMock } from '../../../mocks';
import { ComplexScreen } from '../../components/complex-screen';
import Screen from '../../components/screen';

export default function Code5() {
  return (
    <Screen>
      <ComplexScreen complexData={complexDataMock} />
    </Screen>
  );
}