import type React from 'react';
import * as Modules from '../../modules'; // Ajuste o import conforme necessário
import type { ModuleType, ModulesMap } from '../../types/menu';

interface ScreenItemProps {
  screen: ModuleType | 'menu';
}

const TypedModules: ModulesMap = Modules;

function ScreenItem({ screen }: ScreenItemProps) {
  const Component = TypedModules[screen] ? TypedModules[screen] : null;
  return Component ? <Component /> : null;
};

export default ScreenItem;