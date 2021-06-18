import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Home} from './src/pages/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'#fff'} backgroundColor={'#000'} />
      <Home />
    </>
  );
};

export default App;
