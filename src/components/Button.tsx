import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.Button}>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  Button: {
    backgroundColor: '#a370f7',
    borderRadius: 7,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
