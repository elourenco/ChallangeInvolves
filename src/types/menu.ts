import type * as Modules from '../modules';

export type ModuleType = keyof typeof Modules;
export interface ModulesMap {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: React.ComponentType<any> | undefined;
}