import { StatusBar } from 'expo-status-bar';
import type React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

interface IScreenProps {
  children: React.ReactNode;
}

export default function Screen({ children }: IScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}