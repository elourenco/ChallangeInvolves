import React from 'react';

import { squareMock } from '../../../mocks';
import Screen from '../../components/screen';
import SquareData from '../../components/squad-data';


export default function Code4() {
  return (
    <Screen>
      <SquareData square={squareMock}/>
    </Screen>
  );
}