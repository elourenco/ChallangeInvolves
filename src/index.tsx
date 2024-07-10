import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './components/button';
import Menu from './components/menu';
import Screen from './components/screen';
import ScreenItem from './components/screen-item';
import theme from './theme';
import type { ModuleType } from './types/menu';

export default function App() {
  const [screen, setScreen] = useState<ModuleType | 'menu'>('menu');

  const handlePress = (module: ModuleType) => {
    setScreen(module);
  }

  const handleBackPress = () => {
    setScreen('menu');
  }

  return (
    <Screen>
      <View style={theme.container}>
        <View style={theme.header}>
          {screen !== 'menu' ? <Button title="Back" onPress={handleBackPress} variant='secondary' /> : null}
        </View>
        <View style={theme.content}>
          {screen === 'menu' ? <Menu onPress={handlePress} /> : <ScreenItem screen={screen}/>}
        </View>
      </View>
    </Screen>
  );
}
