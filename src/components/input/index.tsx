import React, { useCallback, useState } from 'react';
import { Text, TextInput, type TextInputProps, View } from 'react-native';
import { styles } from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  text: string;
  onChangeText: (text: string) => void;
}

export default function Input({ label, text = '', onChangeText, ...textInputProps }: InputProps) {
  const [value, setValue] = useState<string>(text);

  const handleChange = useCallback((textValue: string) => {
    setValue(textValue);
    onChangeText(textValue);
  },[onChangeText]);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput value={value} onChangeText={handleChange} {...textInputProps} />
      </View>
    </View>
  );
}