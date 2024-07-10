import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchNewComplexData } from '../../api/complex-data-api';
import translate from '../../i18n';
import type { IComplexData } from '../../types/complex-data';
import { parseExpensiveData } from '../../utils/parse';
import Button from '../button';
import ComplexDataList from '../complex-data-list';
import Container from '../container';
import Title from '../title';

interface IComplexScreenProps {
  complexData: IComplexData[];
}

export const ComplexScreen = ({ complexData }: IComplexScreenProps) => {
  const [formData, setFormData] = useState<IComplexData[]>(complexData);
  
  useEffect(() => {
    setFormData(complexData);
  }, [complexData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchNewComplexData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const parsedComplexData = useCallback(() => {
    return parseExpensiveData(formData);
  }, [formData]);
  
  const getTotalValue = useMemo(() => {
    let total = 0;
    for (let i = 0; i < formData.length; i++) {
      total += formData[i].value;
    }
    return total;
  }, [formData]);

  const onChangeValue = useCallback((id: number, value: string) => {
    const newFormData = formData.map(data => {
      return data.id === id ? { ...data, value: Number(value) } : data;
    })
    setFormData(newFormData);
  }, [formData]);

  return (
    <Container>
      <Title description={`Total: ${getTotalValue}`} />
      <ComplexDataList data={parsedComplexData()} onChangeValue={onChangeValue} />
      <Button onPress={() => {
        console.log('formData', formData)
        //navigation.navigate("SubmitScreen", { formData })
      }} title={translate('buttonSubmit')} />
  </Container>
  )
}