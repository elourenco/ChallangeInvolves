import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'gray',
    maxWidth: 100,
  },
});