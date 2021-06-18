import React, {useState, useEffect} from 'react';
import {Button} from '../components/Button';
import {SkillsCards} from '../components/SkillsCards';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
  Alert,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySKills, setMySkills] = useState([]);
  const [greetings, setGreeting] = useState('');

  useEffect(() => {
    const date = new Date().getHours();

    if (date < 12) {
      setGreeting('Good Morning');
    } else if (date >= 12 && date < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  function handleAddNewSkill() {
    if (newSkill === '') {
      Alert.alert('Preencha o campo!');

      return;
    }

    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Title}>Welcome Dev</Text>
      <Text style={[styles.TitleGreetings, {marginTop: 2}]}>{greetings}</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={'New skill'}
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.Title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySKills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillsCards skills={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  Title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  TitleGreetings: {
    color: '#fff',
    fontSize: 14,
  },
  TextInput: {
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 20,
    borderRadius: 5,
    color: '#fff',
  },
});
