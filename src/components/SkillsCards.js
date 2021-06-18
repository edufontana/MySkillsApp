import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillsCards({skills}) {
  return (
    <TouchableOpacity style={styles.ButtonSkill}>
      <Text style={styles.ButtonText}>{skills}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
