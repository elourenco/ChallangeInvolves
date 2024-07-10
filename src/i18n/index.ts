import locale from "./locales/ptBr";

const translate = (key: string) => {
  return locale[key];
}

export default translate;