import type React from 'react';
import { ScrollView } from 'react-native';

interface IFormProps {
  children: React.ReactNode;
}

export default function Form({ children }: IFormProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}