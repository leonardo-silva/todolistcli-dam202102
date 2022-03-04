import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Tela HOME Blz!!
      </Text>
    </SafeAreaView>
  );
}

// SafeAreaView: componente que evita que, no caso do ios,
// o conteúdo da tela fique por cima da barra de status.
// No Android, SafeAreaView não tem efeito.