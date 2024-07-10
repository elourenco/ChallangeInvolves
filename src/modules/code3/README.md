## Trecho 3

- Importar NativeModules de react-native.
- Desestruturar CalendarModule de NativeModules.
- Definir uma interface TypeScript para os métodos disponíveis em CalendarModule.
- Criar uma função ou classe que verifique se CalendarModule está disponível.
   a. Se não estiver disponível, lançar um erro ou retornar um stub/fallback.
- Exportar CalendarModule com tipos aplicados e verificação de disponibilidade.

```TS
import { NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;

interface ICalendarModule {
  createEvent(name: string, location: string, date: number): Promise<string>;
}

const isCalendarModuleAvailable = (module: any): module is ICalendarModule => {
  return !!module;
};

export const Calendar = isCalendarModuleAvailable(CalendarModule) ? CalendarModule as ICalendarModule : null;
```