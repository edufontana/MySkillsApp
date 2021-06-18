import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.Button}>
      <Text style={styles.Title}>Add</Text>
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
