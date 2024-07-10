export const INITIAL_FORM_VALUES = {
  name: '',
  password: '',
  confirmPassword: '',
  age: '',
  store: '',
  retail: ''
};

export type FormKeys = keyof typeof INITIAL_FORM_VALUES;