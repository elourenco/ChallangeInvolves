import React from 'react';
import PromoterForm from '../../components/promoter-form';
import Screen from '../../components/screen';
import { INITIAL_FORM_VALUES } from '../../constants';

export default function Code2() {
  return (
    <Screen>
      <PromoterForm initialValues={INITIAL_FORM_VALUES} />
    </Screen>
  );
}
