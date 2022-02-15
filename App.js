import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <Text style={{fontSize: 25}}>
        React Native é muito massa!!
      </Text>
    </View>
  );
}